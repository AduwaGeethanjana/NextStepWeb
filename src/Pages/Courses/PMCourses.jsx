import React, { useState } from "react";
import "./Courses.css";

const courseListingsData = [
  {
    id: 1,
    title: "Introduction to Project Management",
    school: "IBM",
    description:
      "This course provides an overview of project management concepts, methodologies, and tools essential for managing projects effectively.",
    link: "https://www.coursera.org/learn/introduction-to-project-management",
    level: "Beginner",
    type: "General Project Management"
  },
  {
    id: 2,
    title: "Project Management Essentials",
    school: "University of Colorado Boulder",
    description:
      "Covers the fundamental principles of project management, including planning, execution, and monitoring.",
    link: "https://www.coursera.org/learn/project-management-essentials",
    level: "Beginner",
    type: "General Project Management"
  },
  {
    id: 3,
    title: "Agile Project Management",
    school: "Google",
    description:
      "An introduction to Agile project management principles and practices, focusing on iterative development and team collaboration.",
    link: "https://www.coursera.org/learn/agile-project-management",
    level: "Beginner",
    type: "Agile"
  },
  {
    id: 4,
    title: "Microsoft Project Management",
    school: "Howard University",
    description:
      "Learn how to use Microsoft Project for effective project planning and management.",
    link: "https://www.coursera.org/learn/microsoft-project-management",
    level: "Beginner",
    type: "Microsoft Project"
  },
  {
    id: 5,
    title: "Create a Project Management Tracker using Microsoft Excel",
    school: "Coursera Project Network",
    description:
      "A guided project that teaches how to create a project management tracker using Excel.",
    link:
      "https://www.coursera.org/projects/create-a-project-management-tracker-using-microsoft-excel",
    level: "Beginner",
    type: "Tools and Techniques"
  },
  {
    id: 6,
    title: "Project Management Principles and Practices",
    school: "University of California, Irvine",
    description:
      "A specialization that dives deeper into project management techniques, covering planning, execution, and risk management.",
    link: "https://www.coursera.org/specializations/project-management",
    level: "Intermediate",
    type: "General Project Management"
  },
  {
    id: 7,
    title: "Engineering Project Management",
    school: "University of Virginia",
    description:
      "Focuses on project management in engineering contexts, covering planning, execution, and performance evaluation.",
    link: "https://www.coursera.org/learn/engineering-project-management",
    level: "Intermediate",
    type: "Engineering"
  },
  {
    id: 8,
    title: "Fundamentals of Project Planning and Management",
    school: "University of Virginia",
    description:
      "This course covers essential planning techniques and tools for effective project management.",
    link: "https://www.coursera.org/learn/project-planning",
    level: "Intermediate",
    type: "Planning and Scheduling"
  },
  {
    id: 9,
    title: "Professional Certificate in Project Management",
    school: "Simplilearn",
    description:
      "Comprehensive program covering PMP®, Agile Scrum Master, Microsoft Project 2021, and more.",
    link:
      "https://www.simplilearn.com/project-management-certification-training",
    level: "Intermediate",
    type: "Certification Preparation"
  },
  {
    id: 10,
    title: "Google Project Management: Professional Certificate",
    school: "Google",
    description:
      "A comprehensive program that prepares learners for entry-level project management roles.",
    link:
      "https://www.coursera.org/professional-certificates/google-project-management",
    level: "Intermediate",
    type: "Certification Preparation"
  },
  {
    id: 11,
    title: "PMP® Certification Training Course",
    school: "Simplilearn",
    description:
      "Prepares students for the PMP certification exam with in-depth coverage of PMBOK® Guide.",
    link: "https://www.simplilearn.com/pmp-certification-training-course",
    level: "Advanced",
    type: "Certification Preparation"
  },
  {
    id: 12,
    title: "PRINCE2® Foundation and Practitioner Certification",
    school: "Simplilearn",
    description:
      "Comprehensive training on the PRINCE2 methodology for effective project management.",
    link: "https://www.simplilearn.com/prince2-certification-training",
    level: "Advanced",
    type: "Certification Preparation"
  },
  {
    id: 13,
    title: "Advanced Project Management",
    school: "Stanford University",
    description:
      "Focuses on advanced topics in project management including leadership and strategic alignment.",
    link: "https://online.stanford.edu/courses/xine257-advanced-project-management",
    level: "Advanced",
    type: "Leadership and Strategy"
  },
  {
    id: 14,
    title: "Mastering Project Management",
    school: "University of California, Irvine",
    description:
      "An advanced course covering complex project scenarios and strategic decision-making in projects.",
    link: "https://www.coursera.org/learn/mastering-project-management",
    level: "Advanced",
    type: "Strategic Management"
  },
  {
    id: 15,
    title: "Project Management for Development",
    school: "University of Washington",
    description:
      "Focuses on applying project management principles in development projects with real-world applications.",
    link: "https://www.coursera.org/learn/project-management-for-development",
    level: "Advanced",
    type: "Development"
  }
];

const ProjectManagementCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const types = [
    "General Project Management",
    "Agile",
    "Microsoft Project",
    "Tools and Techniques",
    "Engineering",
    "Planning and Scheduling",
    "Certification Preparation",
    "Leadership and Strategy",
    "Strategic Management",
    "Development"
  ];

  const filteredCourses = courseListingsData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesType = !selectedType || course.type === selectedType;
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="course-board">
      <div className="banner">
        <h1>Project Management Courses</h1>
        <p>Enhance your project management skills</p>
      </div>

      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses by title, school, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <select
          className="filter-select"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <a
            key={course.id}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="course-card"
          >
            <div className="course-card-header">
              <h2>{course.title}</h2>
              <span className={`level-badge ${course.level.toLowerCase()}`}>
                {course.level}
              </span>
            </div>

            <div className="school-info">{course.school}</div>

            <p className="course-description">{course.description}</p>
          </a>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="no-results">
          <p>No courses found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProjectManagementCourses;