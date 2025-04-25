import React, { useState, useEffect } from 'react';
import './SkillQuiz.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Pages/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import ml1 from '../../assets/ml1.PNG';
import ml2 from '../../assets/ml2.PNG';

const questions = [
  {
    id: 1,
    question: "What is machine learning?",
    options: [
      "A process of programming computers to perform specific tasks",
      "A method of data analysis that automates analytical model building",
      "A type of artificial intelligence that mimics human reasoning",
      "A technique for creating user interfaces",
    ],
    correctAnswer: "A method of data analysis that automates analytical model building",
    category: "Fundamentals",
  },
  {
    id: 2,
    question: "Which of the following is an example of supervised learning?",
    options: [
      "Clustering",
      "Dimensionality Reduction",
      "Linear Regression",
      "Anomaly Detection",
    ],
    correctAnswer: "Linear Regression",
    category: "Types of ML",
  },
  {
    id: 3,
    question: "What is a feature in machine learning?",
    options: [
      "The output of a model",
      "A measurable property or characteristic of the data",
      "A type of algorithm",
      "A method for model evaluation",
    ],
    correctAnswer: "A measurable property or characteristic of the data",
    category: "Fundamentals",
  },
  {
    id: 4,
    question: "What is the purpose of a confusion matrix?",
    options: [
      "To visualize the distribution of training data",
      "To evaluate the performance of a classification model",
      "To optimize hyperparameters",
      "To visualize neural network architecture",
    ],
    correctAnswer: "To evaluate the performance of a classification model",
    category: "Evaluation",
  },
  {
    id: 5,
    question: "Which of the following techniques is used to prevent overfitting in machine learning models?",
    options: [
      "Increasing the training dataset size",
      "Using a simpler model",
      "Cross-validation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    category: "Model optimization",
  },
  {
    id: 6,
    question: "What does the train_test_split function do in the following code?",
    options: [
      "It combines the training and test datasets into one",
      "It splits the dataset into training and testing subsets",
      "It normalizes the data",
      "It trains the model on the entire dataset",
    ],
    correctAnswer: "It splits the dataset into training and testing subsets",
    category: "Data preparation",
  },
  {
    id: 7,
    question: "What is the purpose of regularization in machine learning?",
    options: [
      "To improve the model's accuracy",
      "To reduce the complexity of the model and prevent overfitting",
      "To increase the number of features",
      "To optimize the model's hyperparameters",
    ],
    correctAnswer: "To reduce the complexity of the model and prevent overfitting",
    category: "Model optimization",
    image: ml1, // Include the ml1 image for question 7
  },
  {
    id: 8,
    question: "Which algorithm is commonly used for dimensionality reduction?",
    options: [
      "Support Vector Machines (SVM)",
      "K-Means Clustering",
      "Principal Component Analysis (PCA)",
      "Decision Trees",
    ],
    correctAnswer: "Principal Component Analysis (PCA)",
    category: "Dimensionality",
  },
  {
    id: 9,
    question: "What does the max_depth parameter control in this decision tree model?",
    options: [
      "The maximum number of features to consider when looking for the best split",
      "The maximum number of samples required to be at a leaf node",
      "The maximum depth of the tree, limiting how deep the tree can grow",
      "The minimum number of samples required to split an internal node",
    ],
    correctAnswer: "The maximum depth of the tree, limiting how deep the tree can grow",
    category: "Algorithms",
    image: ml2, // Include the ml2 image for question 9
  },
  {
    id: 10,
    question: "What is the purpose of hyperparameter tuning?",
    options: [
      "To evaluate model performance",
      "To optimize the model's performance by adjusting parameters that are not learned during training",
      "To increase the training dataset size",
      "To visualize the model's predictions",
    ],
    correctAnswer: "To optimize the model's performance by adjusting parameters that are not learned during training",
    category: "Parameter optimization",
  },
];

const MachineLearningQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              setUserData(userDoc.data());
            } else {
              console.error('User document does not exist');
            }
          } else {
            console.error('No user is logged in');
            navigate('/login');
          }
          setLoadingUserData(false);
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoadingUserData(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleAnswer = (answerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: String.fromCharCode(97 + answerIndex),
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitResponses();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitResponses = async () => {
    try {
      const response = await fetch(
        'https://us-central1-nextstep-441712.cloudfunctions.net/MLSkillTest',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: responses }),
        }
      );

      const data = await response.json();
      setResult(data);
      setIsQuizCompleted(true);

      if (userData) {
        const resultDoc = doc(db, 'SkillTestResults', `${auth.currentUser.uid}_${Date.now()}`);
        await setDoc(resultDoc, {
          userId: auth.currentUser.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          suggestedCareer: 'Machine Learning',
          skillTestLevel: data.skillLevel,
          skillGap: data.incorrectCategories,
          timestamp: new Date(),
        });
        console.log('Skill test results saved successfully');
      }
    } catch (error) {
      console.error('Error submitting quiz responses:', error);
    }
  };

  if (loadingUserData) {
    return <div>Loading user data...</div>;
  }

  if (isQuizCompleted) {
    return (
      <div className="quiz-container">
        <h2>Machine Learning Skill Test Completed</h2>
        <p>Recommended Career: Machine Learning</p>
        <p>Your Skill Level: <strong>{result.skillLevel}</strong></p>
        <p>Your Score: <strong>{result.totalMarks}/10</strong></p>
        <p>Skill Gaps:</p>
        <ul>
          {result.incorrectCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="result-buttons">
          <button
            className="btn"
            onClick={() => navigate('/mlprojects')}
          >
            Explore Projects to Improve
          </button>
          <button className="btn"  onClick={() => navigate('/mlcourses')}>Explore Courses</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.question}</p>
      {currentQuestion.image && (
        <img src={currentQuestion.image} alt="Question related diagram" className="question-image" />
      )}
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`option-button ${
              responses[currentQuestion.id] === String.fromCharCode(97 + index) ? 'selected' : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <button onClick={handleNext}>
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default MachineLearningQuiz;
