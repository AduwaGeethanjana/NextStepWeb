import React from 'react';
import './KnowledgeNetwork.css';
import { useNavigate } from 'react-router-dom';

const KnowledgeNetwork = () => {
  const navigate = useNavigate();

  // Job roles data
  const jobRoles = [
    {
      title: "Software Engineering",
      description:
        "Learn about the development, design, and maintenance of software applications.",
      path: "/softwareengineering",
    },
    {
      title: "Cyber Security",
      description:
        "Explore the field of securing systems, networks, and data from cyber threats.",
      path: "/cybersecurity",
    },
    {
      title: "DevOps Engineer",
      description:
        "Understand how to streamline software development and IT operations.",
      path: "/devopsengineer",
    },
    {
      title: "Machine Learning Engineer",
      description:
        "Dive into designing and deploying intelligent machine learning systems.",
      path: "/machinelearningengineer",
    },
    {
      title: "Project Manager",
      description:
        "Master the skills to plan, organize, and manage successful projects.",
      path: "/projectmanager",
    },
  ];

  return (
    <div className="knowledge-network-page">
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Knowledge Network</h1>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        {jobRoles.map((role, index) => (
          <div className="card" key={index}>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <button onClick={() => navigate(role.path)} className="read-more-button">
              Read More
            </button>
          </div>
        ))}
      </section>
      
    </div>
  );
};

export default KnowledgeNetwork;
