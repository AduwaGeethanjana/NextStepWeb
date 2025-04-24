import React from 'react';
import './Careers.css';

const MachineLearningEngineer = () => {
  return (
    <div className="machine-learning-engineer-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Machine Learning Engineer</h1>
      </section>

      {/* Job Description */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>
          Machine Learning Engineers are responsible for designing, building, and deploying machine learning models 
          that power intelligent applications. They collaborate with data scientists and software engineers to 
          preprocess data, create algorithms, and ensure scalable and efficient model implementation. This role 
          requires a deep understanding of mathematics, programming, and machine learning frameworks.
        </p>
      </section>

      {/* Skill Requirements */}
      <section className="skills">
        <h2>Skill Requirements</h2>
        <ul>
          <li>Strong knowledge of machine learning algorithms and techniques</li>
          <li>Proficiency in Python and machine learning libraries like TensorFlow, PyTorch, or scikit-learn</li>
          <li>Understanding of data preprocessing and feature engineering</li>
          <li>Experience with statistical modeling and data analysis</li>
          <li>Familiarity with big data tools such as Hadoop or Spark</li>
          <li>Knowledge of cloud platforms for model deployment (e.g., AWS, Azure, GCP)</li>
          <li>Problem-solving and analytical skills</li>
        </ul>
      </section>

      {/* Roadmap Banner */}
      <section className="roadmap-banner">
        <h2>Explore the Roadmap</h2>
        <a href="https://roadmap.sh/machine-learning" target="_blank" rel="noopener noreferrer" className="roadmap-link">
          https://roadmap.sh/machine-learning
        </a>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="card">
          <h3>Courses</h3>
          <p>Explore courses to master machine learning concepts and tools.</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p>Work on machine learning projects to gain hands-on experience.</p>
        </div>
        <div className="card">
          <h3>Job Opportunities</h3>
          <p>Discover job roles in the field of machine learning.</p>
        </div>
      </section>
      
    </div>
  );
};

export default MachineLearningEngineer;
