import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <h2>About Next Step</h2>
      <p>
        Next Step is an innovative platform designed to guide individuals in their career journey. 
        By analyzing your strengths, interests, and skills, we provide personalized career recommendations, 
        project ideas, courses, and job opportunities tailored to your goals.
      </p>
      <div className="guide">
        <h3>How to Get Started</h3>
        <ol>
          <li>Register your account to access all features.</li>
          <li>Take the Career Test to discover your recommended career path.</li>
          <li>Complete the Skill Test relevant to your career path.</li>
          <li>Receive personalized suggestions for project ideas, jobs, and courses to enhance your skills.</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
