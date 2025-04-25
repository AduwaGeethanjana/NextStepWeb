import React from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';

const DevOpsEngineer = () => {
  return (
    <div className="devops-engineer-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>DevOps Engineer</h1>
      </section>

      {/* Job Description */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>
          DevOps engineers bridge the gap between development and operations teams by ensuring smooth and efficient 
          software delivery pipelines. They are responsible for automating processes, managing infrastructure, 
          monitoring applications, and fostering collaboration among teams. DevOps focuses on improving 
          deployment speed, system reliability, and scalability.
        </p>
      </section>

      {/* Skill Requirements */}
      <section className="skills">
        <h2>Skill Requirements</h2>
        <ul>
          <li>Proficiency in scripting and programming languages (e.g., Python, Bash, or PowerShell)</li>
          <li>Experience with CI/CD tools like Jenkins, GitLab CI, or CircleCI</li>
          <li>Knowledge of containerization technologies such as Docker and Kubernetes</li>
          <li>Understanding of cloud platforms (e.g., AWS, Azure, Google Cloud)</li>
          <li>Strong grasp of version control systems like Git</li>
          <li>Problem-solving and troubleshooting skills</li>
          <li>Collaboration and communication skills to work across teams</li>
        </ul>
      </section>

      {/* Roadmap Banner */}
      <section className="roadmap-banner">
        <h2>Explore the Roadmap</h2>
        <a href="https://roadmap.sh/devops" target="_blank" rel="noopener noreferrer" className="roadmap-link">
          https://roadmap.sh/devops
        </a>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <Link to="/docourses" className="card">
          <h3>Courses</h3>
          <p>Discover courses that can help you build DevOps expertise.</p>
        </Link>
        <Link to="/doprojects" className="card">
          <h3>Projects</h3>
          <p>Work on projects to understand real-world DevOps workflows.</p>
        </Link>
        <Link to="/dojobs" className="card">
          <h3>Job Opportunities</h3>
          <p>Explore job roles available for DevOps engineers.</p>
        </Link>
      </section>
      
    </div>
  );
};

export default DevOpsEngineer;
