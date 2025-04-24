import React from 'react';
import './Careers.css';

const CyberSecurity = () => {
  return (
    <div className="cyber-security-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Cyber Security</h1>
      </section>

      {/* Job Description */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>
          Cyber security professionals are responsible for protecting computer systems, networks, and data from 
          unauthorized access, theft, and damage. They design and implement security measures, monitor systems 
          for vulnerabilities, and respond to security breaches. This role requires a deep understanding of 
          security protocols, threat detection, and risk management.
        </p>
      </section>

      {/* Skill Requirements */}
      <section className="skills">
        <h2>Skill Requirements</h2>
        <ul>
          <li>Strong knowledge of network security and protocols</li>
          <li>Experience with firewalls, intrusion detection systems, and vulnerability scanning tools</li>
          <li>Understanding of encryption techniques and secure coding practices</li>
          <li>Ability to analyze and respond to security threats in real time</li>
          <li>Familiarity with compliance standards such as ISO 27001 or GDPR</li>
          <li>Critical thinking and problem-solving abilities</li>
          <li>Strong communication skills to explain security measures to stakeholders</li>
        </ul>
      </section>

      {/* Roadmap Banner */}
      <section className="roadmap-banner">
        <h2>Explore the Roadmap</h2>
        <a href="https://roadmap.sh/cyber-security" target="_blank" rel="noopener noreferrer" className="roadmap-link">
          https://roadmap.sh/cyber-security
        </a>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <h3>Courses</h3>
          <p>Find courses to help you build expertise in cyber security concepts and tools.</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Work on real-world cyber security projects to gain hands-on experience.</p>
        </div>
        <div className="card">
          <h3>Job Opportunities</h3>
          <p>Explore job roles and career paths in the cyber security field.</p>
        </div>
      </section>
      
    </div>
  );
};

export default CyberSecurity;
