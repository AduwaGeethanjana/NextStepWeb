import React, { useState, useEffect } from 'react';
import './QuizPage.css';
import { db, collection, getDocs, doc, getDoc, setDoc } from './firebase';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasTakenTest, setHasTakenTest] = useState(false);
  const navigate = useNavigate();

  const careerToQuizPath = {
    "Software Engineering": "/sequiz",
    "Machine Learning": "/mlquiz",
    "Cybersecurity": "/csquiz",
    "Project Management": "/pmquiz",
    "DevOps": "/doquiz"
  };

  useEffect(() => {
    const fetchUserDataAndCheckTestStatus = async () => {
      setLoading(true);
      const user = auth.currentUser;

      if (!user) {
        navigate('/defaultpage');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);

          const testResultDoc = await getDoc(doc(db, 'CareerTestResults', user.uid));
          if (testResultDoc.exists()) {
            setHasTakenTest(true);
            setResult(testResultDoc.data().career);
          }
        } else {
          console.error('No user document found.');
          navigate('/defaultpage');
        }
      } catch (error) {
        console.error('Error fetching user data or test status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDataAndCheckTestStatus();
  }, [navigate]);

  useEffect(() => {
    if (!hasTakenTest && !loading) {
      const loadQuestions = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'Questions'));
          const questionsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setQuestions(questionsData);
        } catch (error) {
          console.error('Error loading questions:', error);
        }
      };
      loadQuestions();
    }
  }, [hasTakenTest, loading]);

  const handleAnswer = (answer) => {
    const questionId = questions[currentQuestionIndex].questionId;
    setResponses((prev) => ({ ...prev, [questionId]: answer }));
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
        'https://us-central1-nextstep-441712.cloudfunctions.net/CareerAssessment',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            responses: Object.entries(responses).map(([questionId, answer]) => ({
              questionId: Number(questionId),
              answer, // Send numerical values (1 to 5)
            })),
          }),
        }
      );

      const data = await response.json();

      if (!data.recommendedCareer || !data.normalizedScores) {
        throw new Error('Incomplete response from the backend');
      }

      setResult(data.recommendedCareer);

      if (userData) {
        const normalizedScores = data.normalizedScores || {
          Realistic: 0,
          Investigative: 0,
          Artistic: 0,
          Social: 0,
          Enterprising: 0,
          Conventional: 0,
        };

        await setDoc(doc(db, 'CareerTestResults', userData.uid), {
          userId: userData.uid,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          career: data.recommendedCareer,
          scores: normalizedScores, // Save normalized scores
          explanation: data.explanation || 'No explanation provided.',
          highestMatchScore: data.highestMatchScore || 0,
          timestamp: new Date(),
        });
      }

      setIsQuizCompleted(true);
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (hasTakenTest) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed</h2>
        <p>Your recommended career path: <strong>{result}</strong></p>
        <div className="result-buttons">
          {/* Navigate to the relevant career description page */}
          <button
            onClick={() =>
              navigate(`/${result.replace(/\s+/g, '').toLowerCase()}`) // Navigate to career description page
            }
            className="result-button"
          >
            Explore Your Career Path
          </button>
          <p>Take the skill test in {result} to know your level in this field.</p>
          {/* Navigate to the relevant quiz page */}
          <button
            onClick={() => navigate(careerToQuizPath[result] || '/defaultpage')}
            className="result-button"
          >
            Take Skill Test
          </button>
          {/* New Explore Jobs Button */}
          <button
            onClick={() => {
              // Determine the correct route based on the result
              let jobRoute = '/jobs'; // Default route
              switch (result) {
                case 'Software Engineering':
                  jobRoute = '/sejobs';
                  break;
                case 'Machine Learning':
                  jobRoute = '/mljobs';
                  break;
                case 'Cybersecurity':
                  jobRoute = '/csjobs';
                  break;
                case 'Project Management':
                  jobRoute = '/pmjobs';
                  break;
                case 'DevOps':
                  jobRoute = '/dojobs';
                  break;
                default:
                  break;
              }
              navigate(jobRoute);
            }}
            className="result-button"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    );
  }
  
  if (isQuizCompleted) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed</h2>
        <p>Your recommended career path: <strong>{result}</strong></p>
        <div className="result-buttons">
          {/* Navigate to the relevant career description page */}
          <button
            onClick={() =>
              navigate(`/${result.replace(/\s+/g, '').toLowerCase()}`) // Navigate to career description page
            }
            className="result-button"
          >
            Explore Your Career Path
          </button>
          <p>Take the skill test in {result} to know your level in this field.</p>
          {/* Navigate to the relevant quiz page */}
          <button
            onClick={() => navigate(careerToQuizPath[result] || '/defaultpage')}
            className="result-button"
          >
            Take Skill Test
          </button>
          {/* New Explore Jobs Button */}
          <button
            onClick={() => {
              // Determine the correct route based on the result
              let jobRoute = '/jobs'; // Default route
              switch (result) {
                case 'Software Engineering':
                  jobRoute = '/sejobs';
                  break;
                case 'Machine Learning':
                  jobRoute = '/mljobs';
                  break;
                case 'Cybersecurity':
                  jobRoute = '/csjobs';
                  break;
                case 'Project Management':
                  jobRoute = '/pmjobs';
                  break;
                case 'DevOps':
                  jobRoute = '/dojobs';
                  break;
                default:
                  break;
              }
              navigate(jobRoute);
            }}
            className="result-button"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0 && !hasTakenTest) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.questionString}</p>
      <div className="options">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleAnswer(value)}
            className={`option-button ${
              responses[currentQuestion.questionId] === value ? 'selected' : ''
            }`}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
          className="nav-button"
        >
          Back
        </button>
        <button onClick={handleNext} className="nav-button">
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
