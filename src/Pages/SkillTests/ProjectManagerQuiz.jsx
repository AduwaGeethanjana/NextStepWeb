import React, { useState, useEffect } from 'react';
import './SkillQuiz.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Pages/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const questions = [
  {
    id: 1,
    question: "What is the primary goal of project management?",
    options: [
      "Increase team size",
      "Deliver projects on time and within budget",
      "Reduce project costs",
      "Create extensive documentation",
    ],
    correctAnswer: "Deliver projects on time and within budget",
    category: "Fundamentals",
  },
  {
    id: 2,
    question: "Which of the following is a key component of the project management triangle?",
    options: ["Quality", "Resources", "Schedule", "Profitability"],
    correctAnswer: "Schedule",
    category: "Fundamentals",
  },
  {
    id: 3,
    question: "What does a Gantt chart primarily illustrate?",
    options: [
      "Project budgets",
      "Project risks",
      "Project timelines and task dependencies",
      "Team performance metrics",
    ],
    correctAnswer: "Project timelines and task dependencies",
    category: "Project Management Tools",
  },
  {
    id: 4,
    question: "In the context of project management, what is a stakeholder?",
    options: [
      "Someone who manages the project",
      "Any individual or group affected by the project",
      "A team member working on the project",
      "A client who pays for the project",
    ],
    correctAnswer: "Any individual or group affected by the project",
    category: "Fundamentals",
  },
  {
    id: 5,
    question: "What is the purpose of a project charter?",
    options: [
      "To detail project tasks and timelines",
      "To formally authorize the project and outline objectives",
      "To evaluate team performance",
      "To document project risks",
    ],
    correctAnswer: "To formally authorize the project and outline objectives",
    category: "Project Initiation",
  },
  {
    id: 6,
    question: "Which methodology focuses on iterative development and delivering small increments of a project?",
    options: ["Waterfall", "Agile", "Six Sigma", "Lean"],
    correctAnswer: "Agile",
    category: "Project Methodologies",
  },
  {
    id: 7,
    question: "What is risk management in project management?",
    options: [
      "A method to reduce project scope",
      "The process of identifying, analyzing, and responding to project risks",
      "A way to maximize project budget",
      "A technique for improving team collaboration",
    ],
    correctAnswer: "The process of identifying, analyzing, and responding to project risks",
    category: "Risk Management",
  },
  {
    id: 8,
    question: "Which tool is commonly used for tracking project issues and progress?",
    options: [
      "Microsoft Word",
      "Microsoft Excel",
      "Project management software (e.g., Trello, Asana)",
      "Email",
    ],
    correctAnswer: "Project management software (e.g., Trello, Asana)",
    category: "Project Management Tools",
  },
  {
    id: 9,
    question: "What does 'scope creep' refer to in project management?",
    options: [
      "The reduction of project requirements",
      "Uncontrolled changes or continuous growth in project scope",
      "The completion of project tasks ahead of schedule",
      "A formal change request process",
    ],
    correctAnswer: "Uncontrolled changes or continuous growth in project scope",
    category: "Scope Management",
  },
  {
    id: 10,
    question: "Which of the following best describes the role of a project manager?",
    options: [
      "A team member responsible for specific tasks",
      "A person who only focuses on budget management",
      "A leader who coordinates all aspects of a project and manages the team",
      "An individual who only communicates with clients",
    ],
    correctAnswer: "A leader who coordinates all aspects of a project and manages the team",
    category: "Fundamentals",
  },
];

const ProjectManagementQuiz = () => {
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
        'https://us-central1-nextstep-441712.cloudfunctions.net/PMSkillTest',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: responses }),
        }
      );

      const data = await response.json();
      setResult(data);

      if (userData) {
        const resultDoc = doc(db, 'SkillTestResults', `${auth.currentUser.uid}_${Date.now()}`);
        await setDoc(resultDoc, {
          userId: auth.currentUser.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          suggestedCareer: 'Project Management',
          skillTestLevel: data.skillLevel,
          skillGap: data.incorrectCategories,
          timestamp: new Date(),
        });
        console.log('Skill test results saved successfully');
      }
      setIsQuizCompleted(true);
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
        <h2>Project Management Skill Test Completed</h2>
        <p>Recommended Career: Project Management</p>
        <p>Your Skill Level: <strong>{result.skillLevel}</strong></p>
        <p>Your Score: <strong>{result.totalMarks}/10</strong></p>
        <p>Skill Gaps:</p>
        <ul>
          {result.incorrectCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="result-buttons">
          <button className="btn" onClick={() => navigate('/pmprojects')}>
            Explore Projects to Improve
          </button>
          <button className="btn"  onClick={() => navigate('/pmcourses')}>Explore Courses</button>
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

export default ProjectManagementQuiz;
