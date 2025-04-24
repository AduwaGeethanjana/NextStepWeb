import React from 'react';
import './Careers.css';

const SoftwareEngineering = () => {
  return (
    <div className="software-engineering-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Software Engineering</h1>
      </section>

      {/* Job Description */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>
          Software engineering is a field focused on the development, design, and maintenance of software applications. 
          Software engineers utilize programming languages, development tools, and methodologies to create efficient, 
          scalable, and maintainable software that meets the needs of users. This role requires a strong understanding 
          of computer science fundamentals, problem-solving abilities, and the capacity to work both independently 
          and in a team.
        </p>
      </section>

      {/* Skill Requirements */}
      <section className="skills">
        <h2>Skill Requirements</h2>
        <ul>
          <li>Proficiency in programming languages such as JavaScript, Python, Java, or C++</li>
          <li>Understanding of data structures and algorithms</li>
          <li>Experience with software development methodologies (e.g., Agile, Scrum)</li>
          <li>Knowledge of databases and SQL</li>
          <li>Familiarity with version control systems, such as Git</li>
          <li>Problem-solving and debugging skills</li>
          <li>Good communication and teamwork abilities</li>
        </ul>
      </section>

      {/* Roadmap Banner */}
      <section className="roadmap-banner">
        <h2>Explore the Roadmap</h2>
        <a href="https://roadmap.sh/full-stack" target="_blank" rel="noopener noreferrer">
          <button className="roadmap-link">Click Here</button> 
        </a>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <h3>Courses</h3>
          <p>Explore courses that can help you build a strong foundation in software engineering.</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Get hands-on experience by working on real-world projects.</p>
        </div>
        <div className="card">
          <h3>Job Opportunities</h3>
          <p>Discover job roles available for software engineers.</p>
        </div>
      </section>
      
    </div>
  );
};

export default SoftwareEngineering;