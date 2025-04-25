import React from 'react';
import './JobPage.css'; // Reusing the same CSS for consistency
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const navigate = useNavigate();

  // Job listings for each occupation
  const jobs = [
    {
      title: "Software Engineering Jobs",
      description: "Browse job openings for frontend, backend, and full-stack developers.",
      path: "/sejobs",
    },
    {
      title: "Cyber Security Jobs",
      description: "Find positions in threat analysis, security auditing, and ethical hacking.",
      path: "/csjobs",
    },
    {
      title: "DevOps Jobs",
      description: "Discover roles for cloud engineers, DevOps specialists, and automation experts.",
      path: "/dojobs",
    },
    {
      title: "Machine Learning Jobs",
      description: "Explore careers in AI, data science, and ML model deployment.",
      path: "/mljobs",
    },
    {
      title: "Project Management Jobs",
      description: "Look for opportunities as project coordinators, Agile coaches, and team leads.",
      path: "/pmjobs",
    },
  ];

  return (
    <div className="courses-page"> {/* Reusing the same class */}
      
      {/* Top Banner */}
      <section className="banner">
        <h1>Job Opportunities</h1>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        {jobs.map((job, index) => (
          <div className="card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => navigate(job.path)} className="read-more-button">
              View Jobs
            </button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Jobs;
