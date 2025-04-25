import React from 'react';
import './Project.css'; // Reusing the same CSS for styling consistency
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  // Project listings for each occupation
  const projects = [
    {
      title: "Software Engineering Projects",
      description: "Build CRUD apps, RESTful APIs, and real-time collaborative tools.",
      path: "/seprojects",
    },
    {
      title: "Cyber Security Projects",
      description: "Work on penetration testing, encryption tools, and secure authentication systems.",
      path: "/csprojects",
    },
    {
      title: "DevOps Projects",
      description: "Automate deployment pipelines using Docker, Jenkins, and Kubernetes.",
      path: "/doprojects",
    },
    {
      title: "Machine Learning Projects",
      description: "Create predictive models, recommendation systems, and image classifiers.",
      path: "/mlprojects",
    },
    {
      title: "Project Management Projects",
      description: "Manage real-life team workflows, timelines, and Agile projects.",
      path: "/pmprojects",
    },
  ];

  return (
    <div className="courses-page"> {/* Reused class for layout */}
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Explore Real-World Projects</h1>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => navigate(project.path)} className="read-more-button">
              View Projects
            </button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Projects;
