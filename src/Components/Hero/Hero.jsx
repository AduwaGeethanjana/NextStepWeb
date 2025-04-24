import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Pages/firebase';
import './Hero.css';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate(); // Navigation for redirection

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn to true if user exists, otherwise false
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleQuizAccess = () => {
    if (isLoggedIn) {
      navigate('/quiz'); // Navigate to quiz if logged in
    } else {
      navigate('/default'); // Redirect to DefaultPage if not logged in
    }
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Discover Yourself!</h1>
        <p>Let us be your guide</p>
        <button className="btn" onClick={handleQuizAccess}>
          Get Started!
        </button>
      </div>
    </div>
  );
};

export default Hero;
