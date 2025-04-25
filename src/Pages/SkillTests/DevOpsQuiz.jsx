import React, { useState, useEffect } from 'react';
import './SkillQuiz.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Pages/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const questions = [
  {
    id: 1,
    question: "What does the term 'DevOps' refer to?",
    options: [
      "Development and Operations collaboration",
      "A new programming language",
      "A software development model",
      "A type of cloud service",
    ],
    correctAnswer: "Development and Operations collaboration",
    category: "Fundamentals",
  },
  {
    id: 2,
    question: "Which of the following tools is primarily used for version control?",
    options: ["Docker", "Git", "Jenkins", "Kubernetes"],
    correctAnswer: "Git",
    category: "Version Control",
  },
  {
    id: 3,
    question: "What is Continuous Integration (CI)?",
    options: [
      "The practice of merging code changes into a shared repository frequently",
      "A type of software deployment",
      "A method for managing server infrastructure",
      "The process of writing documentation",
    ],
    correctAnswer: "The practice of merging code changes into a shared repository frequently",
    category: "CICD",
  },
  {
    id: 4,
    question: "Which command is used to build a Docker image?",
    options: ["docker run", "docker build", "docker create", "docker deploy"],
    correctAnswer: "docker build",
    category: "Containerization",
  },
  {
    id: 5,
    question: "What is Infrastructure as Code (IaC)?",
    options: [
      "Writing code for applications",
      "Managing infrastructure using programming languages and configuration files",
      "A method to automate software testing",
      "A tool for monitoring application performance",
    ],
    correctAnswer: "Managing infrastructure using programming languages and configuration files",
    category: "Infrastructure as Code",
  },
  {
    id: 6,
    question: "In the context of CI/CD, what does 'CD' stand for?",
    options: [
      "Continuous Development",
      "Continuous Deployment",
      "Continuous Design",
      "Continuous Delivery",
    ],
    correctAnswer: "Continuous Delivery",
    category: "CICD",
  },
  {
    id: 7,
    question: "Which of the following tools is commonly used for orchestration in a microservices architecture?",
    options: ["Ansible", "Terraform", "Kubernetes", "Jenkins"],
    correctAnswer: "Kubernetes",
    category: "Microservices",
  },
  {
    id: 8,
    question: "What is the primary purpose of using a reverse proxy in a DevOps environment?",
    options: [
      "To serve static content",
      "To enhance application security and load balancing",
      "To run automated tests",
      "To manage version control",
    ],
    correctAnswer: "To enhance application security and load balancing",
    category: "Networking and Security",
  },
  {
    id: 9,
    question: "How do you define a 'blue-green deployment'?",
    options: [
      "A strategy to use two identical environments for application deployment",
      "A method to implement microservices",
      "A way to scale applications",
      "A tool for monitoring application performance",
    ],
    correctAnswer: "A strategy to use two identical environments for application deployment",
    category: "Deployment Strategies",
  },
  {
    id: 10,
    question: "What is the main advantage of using containerization in DevOps?",
    options: [
      "Containers are easier to set up than virtual machines",
      "Containers can run on any machine without compatibility issues",
      "Containers provide enhanced security over traditional applications",
      "Containers eliminate the need for continuous integration",
    ],
    correctAnswer: "Containers can run on any machine without compatibility issues",
    category: "Containerization",
  },
];

const DevOpsQuiz = () => {
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
        'https://us-central1-nextstep-441712.cloudfunctions.net/DOSkillTest',
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
          suggestedCareer: 'DevOps Engineer',
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
        <h2>DevOps Skill Test Completed</h2>
        <p>Recommended Career: DevOps Engineer</p>
        <p>Your Skill Level: <strong>{result.skillLevel}</strong></p>
        <p>Your Score: <strong>{result.totalMarks}/10</strong></p>
        <p>Skill Gaps:</p>
        <ul>
          {result.incorrectCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="result-buttons">
          <button className="btn" onClick={() => navigate('/doprojects')}>
            Explore Projects to Improve
          </button>
          <button className="btn"  onClick={() => navigate('/docourses')}>Explore Courses</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.question}</p>
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

export default DevOpsQuiz;
