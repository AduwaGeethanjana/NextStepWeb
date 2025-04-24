import React, { useState, useEffect } from 'react';
import './SkillQuiz.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Pages/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import seq1 from '../../assets/seq1.PNG';
import seq2 from '../../assets/seq2.PNG';

const questions = [
  {
    id: 1,
    question: "Given a problem statement, how would you approach designing an algorithm to solve it?",
    options: [
      "Break the problem into smaller parts, design an algorithm for each part, and then combine.",
      "Start coding immediately and troubleshoot as errors arise.",
      "Identify similar problems you've encountered before and use that solution.",
      "Look for online solutions and adapt them without any modification.",
    ],
    correctAnswer: "Break the problem into smaller parts, design an algorithm for each part, and then combine.",
    category: "Programming Logic",
  },
  {
    id: 2,
    question: "Can you explain the differences between arrays and linked lists and provide a scenario where one is more appropriate than the other?",
    options: [
      "Arrays are fixed in size, whereas linked lists are dynamic, useful for when data sizes change frequently.",
      "Arrays are stored on disk, while linked lists are in memory.",
      "Arrays allow easy insertions, while linked lists do not.",
      "Linked lists are faster to search compared to arrays.",
    ],
    correctAnswer: "Arrays are fixed in size, whereas linked lists are dynamic, useful for when data sizes change frequently.",
    category: "Data Structures",
  },
  {
    id: 3,
    question: "Describe the concepts of inheritance, polymorphism, and encapsulation in object-oriented programming.",
    options: [
      "Inheritance allows classes to share methods, polymorphism enables method overloading, and encapsulation hides data.",
      "Inheritance allows classes to inherit properties, polymorphism supports flexibility, and encapsulation ensures data protection.",
      "Inheritance allows changing data types, polymorphism is for looping, and encapsulation restricts array sizes.",
      "Encapsulation is a method of saving memory, inheritance reduces code size, and polymorphism combines two functions.",
    ],
    correctAnswer: "Inheritance allows classes to inherit properties, polymorphism supports flexibility, and encapsulation ensures data protection.",
    category: "OOP",
  },
  {
    id: 4,
    question: "What are the benefits of using Git for version control, and how would you handle merging conflicts?",
    options: [
      "Git tracks changes over time and merging conflicts are handled by rewriting code from scratch.",
      "Git supports collaboration, and merging conflicts can be resolved by discussing with team members.",
      "Git allows branch management, and conflicts can be resolved by merging the main branch into the feature branch.",
      "Git provides history tracking and allows manual or tool-based conflict resolution.",
    ],
    correctAnswer: "Git provides history tracking and allows manual or tool-based conflict resolution.",
    category: "Version Control",
  },
  {
    id: 5,
    question: "Given a scenario where a piece of code takes longer than expected to execute, what steps would you take to improve its performance?",
    options: [
      "Rewrite the entire code from scratch.",
      "Identify bottlenecks, optimize algorithms, and reduce redundant processes.",
      "Increase computer memory to handle the program better.",
      "Run the code in smaller parts to make it faster.",
    ],
    correctAnswer: "Identify bottlenecks, optimize algorithms, and reduce redundant processes.",
    category: "Code Optimization",
  },
  {
    id: 6,
    question: "Explain your approach to debugging a program that produces unexpected output.",
    options: [
      "Run each line of code step-by-step and observe outputs.",
      "Rerun the code multiple times to see if the issue resolves itself.",
      "Ignore the error and hope it resolves with another fix.",
      "Search online for similar issues and apply a solution without verifying.",
    ],
    correctAnswer: "Run each line of code step-by-step and observe outputs.",
    category: "Debugging and Testing",
  },
  {
    id: 7,
    question: "What is the difference between SQL and NoSQL databases, and when might you choose one over the other?",
    options: [
      "SQL databases are structured, NoSQL is flexible, SQL is ideal for complex transactions.",
      "SQL databases support JSON, while NoSQL supports only plain text.",
      "SQL requires multiple servers, while NoSQL runs on a single server.",
      "SQL handles unstructured data, and NoSQL handles structured data.",
    ],
    correctAnswer: "SQL databases are structured, NoSQL is flexible, SQL is ideal for complex transactions.",
    category: "Database Basics",
  },
  {
    id: 8,
    question: "How would you explain RESTful APIs, and what are some key methods (GET, POST, PUT, DELETE) used in REST?",
    options: [
      "RESTful APIs facilitate HTTP requests; GET retrieves data, POST creates data, PUT updates, DELETE removes data.",
      "RESTful APIs are for local data management, with only GET and POST methods.",
      "RESTful APIs are for handling images with HTTP, supporting all file types.",
      "RESTful APIs are used to design databases and don't support remote connections.",
    ],
    correctAnswer: "RESTful APIs facilitate HTTP requests; GET retrieves data, POST creates data, PUT updates, DELETE removes data.",
    category: "APIs",
  },
  {
    id: 9,
    question: "What is the result of calling the following recursive function with n = 4?",
    options: ["4", "6", "10", "12"],
    correctAnswer: "10",
    category: "Recursive Functions",
    image: seq1,
  },
  {
    id: 10,
    question: "What will be the value of result after executing the code below?",
    options: ["15", "12", "18", "21"],
    correctAnswer: "21",
    category: "Logic Programming",
    image: seq2,
  },
];

const SoftwareEngineeringQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [result, setResult] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loadingUserData, setLoadingUserData] = useState(true); // Track loading state
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
              navigate('/login'); // Redirect to login if no user
            }
            setLoadingUserData(false); // Ensure loading state is updated
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
        [currentQuestion.id]: String.fromCharCode(97 + answerIndex), // Convert index to 'a', 'b', 'c', 'd'
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
          'https://us-central1-nextstep-441712.cloudfunctions.net/SESkillTest',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers: responses }), // Send answers in the correct format
          }
        );
  
        const data = await response.json();
        setResult(data); // { totalMarks, skillLevel, incorrectCategories }
        setIsQuizCompleted(true);
  
        // Save results to Firestore
        if (userData) {
          const resultDoc = doc(db, 'SkillTestResults', `${auth.currentUser.uid}_${Date.now()}`);
          await setDoc(resultDoc, {
            userId: auth.currentUser.uid,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            suggestedCareer: 'Software Engineering', // Hardcoded for this quiz
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
      return <div>Loading user data...</div>; // Show loading state
    }
  
    if (isQuizCompleted) {
      return (
        <div className="quiz-container">
          <h2>Software Engineering Skill Test Completed</h2>
          <p>Recommended Career: Software Engineering</p>
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
              onClick={() => navigate('/seprojects')} // Navigate to seprojects page
            >
              Explore Projects to Improve
            </button>
            <button className="btn"
            onClick={() => navigate('/secourses')}
            >Explore Courses</button>
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
  
  export default SoftwareEngineeringQuiz;