import React from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  // Courses data for each job field
  const courses = [
    {
      title: "Software Engineering Courses",
      description: "Explore courses on algorithms, system design, and software architecture.",
      path: "/secourses",
    },
    {
      title: "Cyber Security Courses",
      description: "Learn about ethical hacking, network security, and risk management.",
      path: "/cscourses",
    },
    {
      title: "DevOps Courses",
      description: "Get trained on CI/CD, Docker, Kubernetes, and cloud automation.",
      path: "/docourses",
    },
    {
      title: "Machine Learning Courses",
      description: "Study neural networks, data science, and deep learning techniques.",
      path: "/mlcourses",
    },
    {
      title: "Project Management Courses",
      description: "Master Agile, Scrum, and project lifecycle management strategies.",
      path: "/pmcourses",
    },
  ];

  return (
    <div className="courses-page">

      {/* Top Banner */}
      <section className="banner">
        <h1>Explore Our Courses</h1>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => navigate(course.path)} className="read-more-button">
              View Courses
            </button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Courses;
