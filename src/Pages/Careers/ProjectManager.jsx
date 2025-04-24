import React from 'react';
import './Careers.css';

const ProjectManager = () => {
  return (
    <div className="project-manager-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Project Manager</h1>
      </section>

      {/* Job Description */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>
          Project Managers are responsible for planning, organizing, and overseeing projects to ensure they are 
          completed on time, within scope, and on budget. They coordinate between teams, manage resources, and 
          communicate effectively with stakeholders to achieve project objectives. This role requires strong 
          leadership, organizational, and problem-solving skills.
        </p>
      </section>

      {/* Skill Requirements */}
      <section className="skills">
        <h2>Skill Requirements</h2>
        <ul>
          <li>Strong organizational and time-management skills</li>
          <li>Proficiency in project management tools like Jira, Trello, or Asana</li>
          <li>Knowledge of project management methodologies (e.g., Agile, Scrum, Waterfall)</li>
          <li>Ability to manage resources and budgets effectively</li>
          <li>Excellent communication and leadership skills</li>
          <li>Problem-solving and risk management abilities</li>
          <li>Experience in team collaboration and conflict resolution</li>
        </ul>
      </section>

      {/* Roadmap Banner */}
      <section className="roadmap-banner">
        <h2>Explore the Roadmap</h2>
        <a href="https://roadmap.sh/project-management" target="_blank" rel="noopener noreferrer" className="roadmap-link">
          https://roadmap.sh/project-management
        </a>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <h3>Courses</h3>
          <p>Learn project management methodologies and tools through professional courses.</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Work on project-based scenarios to gain practical experience in project management.</p>
        </div>
        <div className="card">
          <h3>Job Opportunities</h3>
          <p>Explore diverse roles in project management across industries.</p>
        </div>
      </section>
      
    </div>
  );
};

export default ProjectManager;
