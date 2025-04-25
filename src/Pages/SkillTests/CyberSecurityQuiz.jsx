import React, { useState, useEffect } from "react";
import "./SkillQuiz.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Pages/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const questions = [
  {
    id: 1,
    question: "What is the primary goal of cybersecurity?",
    options: [
      "To create more complex software",
      "To protect systems, networks, and programs from digital attacks",
      "To increase the speed of network connections",
      "To enhance user experience on websites",
    ],
    correctAnswer: "To protect systems, networks, and programs from digital attacks",
    category: "Fundamentals",
  },
  {
    id: 2,
    question: "Which of the following is a common type of malware?",
    options: ["Firewall", "Antivirus", "Trojan Horse", "VPN"],
    correctAnswer: "Trojan Horse",
    category: "Threats and Vulnerabilities",
  },
  {
    id: 3,
    question: "What does the term 'phishing' refer to?",
    options: [
      "A technique to improve network speed",
      "A type of cyber attack that uses deception to obtain sensitive information",
      "A method to secure web applications",
      "A process for backing up data",
    ],
    correctAnswer: "A type of cyber attack that uses deception to obtain sensitive information",
    category: "Fundamentals",
  },
  {
    id: 4,
    question: "What is a firewall used for?",
    options: [
      "To create secure passwords",
      "To filter incoming and outgoing network traffic",
      "To encrypt data",
      "To remove malware from a system",
    ],
    correctAnswer: "To filter incoming and outgoing network traffic",
    category: "Network Security",
  },
  {
    id: 5,
    question: "Which of the following protocols is used for secure data transmission over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "Telnet"],
    correctAnswer: "HTTPS",
    category: "Secure Communication",
  },
  {
    id: 6,
    question: "What is the purpose of multi-factor authentication (MFA)?",
    options: [
      "To enhance the speed of user login",
      "To require users to provide multiple forms of verification before access is granted",
      "To simplify password management",
      "To eliminate the need for passwords",
    ],
    correctAnswer: "To require users to provide multiple forms of verification before access is granted",
    category: "Authentication and Access Control",
  },
  {
    id: 7,
    question: "What is a Denial of Service (DoS) attack?",
    options: [
      "An attack that encrypts data to prevent access",
      "An attempt to make a machine or network resource unavailable to its intended users",
      "A method to steal sensitive information",
      "A type of social engineering attack",
    ],
    correctAnswer: "An attempt to make a machine or network resource unavailable to its intended users",
    category: "Threats and Vulnerabilities",
  },
  {
    id: 8,
    question: "Which of the following is a common framework used for cybersecurity risk management?",
    options: ["Agile", "NIST Cybersecurity Framework", "ITIL", "Lean"],
    correctAnswer: "NIST Cybersecurity Framework",
    category: "Risk Management and Frameworks",
  },
  {
    id: 9,
    question: "What is the primary purpose of penetration testing?",
    options: [
      "To improve user experience",
      "To evaluate the security of a system by simulating an attack",
      "To monitor network performance",
      "To encrypt sensitive data",
    ],
    correctAnswer: "To evaluate the security of a system by simulating an attack",
    category: "Security Testing",
  },
  {
    id: 10,
    question: "What does 'zero-day vulnerability' mean?",
    options: [
      "A vulnerability that has been patched",
      "A newly discovered vulnerability that has not yet been addressed by the vendor",
      "A type of malware that activates on the first day of the month",
      "A vulnerability that is publicly known and widely exploited",
    ],
    correctAnswer: "A newly discovered vulnerability that has not yet been addressed by the vendor",
    category: "Threats and Vulnerabilities",
  },
];

const CyberSecurityQuiz = () => {
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
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              setUserData(userDoc.data());
            } else {
              console.error("User document does not exist");
            }
          } else {
            console.error("No user is logged in");
            navigate("/login"); // Redirect to login if no user
          }
          setLoadingUserData(false);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
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
        "https://us-central1-nextstep-441712.cloudfunctions.net/CSSkillTest",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: responses }),
        }
      );

      const data = await response.json();
      setResult(data); // { totalMarks, skillLevel, incorrectCategories }
      setIsQuizCompleted(true);

      // Save results to Firestore
      if (userData) {
        const resultDoc = doc(
          db,
          "SkillTestResults",
          `${auth.currentUser.uid}_${Date.now()}`
        );
        await setDoc(resultDoc, {
          userId: auth.currentUser.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          suggestedCareer: "Cyber Security",
          skillTestLevel: data.skillLevel,
          skillGap: data.incorrectCategories,
          timestamp: new Date(),
        });
        console.log("Skill test results saved successfully");
      }
    } catch (error) {
      console.error("Error submitting quiz responses:", error);
    }
  };

  if (loadingUserData) {
    return <div>Loading user data...</div>;
  }

  if (isQuizCompleted) {
    return (
      <div className="quiz-container">
        <h2>Cyber Security Skill Test Completed</h2>
        <p>Recommended Career: Cyber Security</p>
        <p>
          Your Skill Level: <strong>{result.skillLevel}</strong>
        </p>
        <p>
          Your Score: <strong>{result.totalMarks}/10</strong>
        </p>
        <p>Skill Gaps:</p>
        <ul>
          {result.incorrectCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="result-buttons">
          <button
            className="btn"
            onClick={() => navigate("/csprojects")}
          >
            Explore Projects to Improve
          </button>
          <button className="btn"  onClick={() => navigate('/cscourses')}>Explore Courses</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`option-button ${
              responses[currentQuestion.id] === String.fromCharCode(97 + index)
                ? "selected"
                : ""
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
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CyberSecurityQuiz;
