import React, { useState } from "react";
import "./Courses.css"; 

const courseListingsData = [
  {
    id: 1,
    title: "Introduction to Software Engineering",
    school: "IBM",
    description: "Covers software engineering principles, tools, and practices.",
    link: "https://www.coursera.org/learn/introduction-to-software-engineering",
    level: "Beginner",
    type: "Full Stack" 
  },
  {
    id: 2,
    title: "Coding for Everybody: Getting Started with Python",
    school: "University of Michigan",
    description: "An introduction to programming using Python, focusing on data structures and basic programming concepts.",
    link: "https://www.coursera.org/learn/coding-for-everybody",
    level: "Beginner",
    type: "Backend" 
  },
  {
    id: 3,
    title: "Java Programming: Solving Problems with Software",
    school: "Duke University",
    description: "Teaches Java programming fundamentals and problem-solving techniques.",
    link: "https://www.coursera.org/learn/java-programming",
    level: "Beginner",
    type: "Backend" 
  },
  {
    id: 4,
    title: "Introduction to Coding for Absolute Beginners",
    school: "CodeWeekend", 
    description: "A beginner-friendly course covering the basics of coding and programming concepts.",
    link: "https://maven.com/articles/software-developer-courses",
    level: "Beginner",
    type: "Full Stack" 
  },
  {
    id: 5,
    title: "Software Development Fundamentals",
    school: "Future Learn",
    description: "Provides a comprehensive overview of software development processes with practical examples.",
    link: "https://www.futurelearn.com/courses/software-development-fundamentals",
    level: "Beginner",
    type: "Full Stack" 
  },
  {
    id: 6,
    title: "Introduction to Programming with MATLAB",
    school: "Vanderbilt University",
    description: "Introduces programming concepts using MATLAB, ideal for beginners in programming.",
    link: "https://www.coursera.org/learn/matlab",
    level: "Beginner",
    type: "Backend" 
  },
  {
    id: 7,
    title: "Code Yourself! An Introduction to Programming",
    school: "The University of Edinburgh",
    description: "A hands-on introduction to programming concepts through practical exercises.",
    link: "https://www.coursera.org/learn/code-yourself",
    level: "Beginner",
    type: "Full Stack" 
  },
  {
    id: 8,
    title: "HTML, CSS, and Javascript for Web Developers",
    school: "Johns Hopkins University",
    description: "Covers the basics of web development using HTML, CSS, and JavaScript.",
    link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
    level: "Beginner", 
    type: "Frontend" 
  },
  {
    id: 9,
    title: "Software Engineering: Introduction",
    school: "University of British Columbia",
    description: "Focuses on object-oriented programming in Java and modern software development practices.",
    link: "https://www.coursera.org/learn/software-engineering-introduction",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 10,
    title: "Object Oriented Programming in Java",
    school: "UC San Diego",
    description: "Teaches object-oriented programming principles using Java with hands-on projects.",
    link: "https://www.coursera.org/learn/object-oriented-java",
    level: "Intermediate",
    type: "Backend" 
  },
  {
    id: 11,
    title: "Applied Software Engineering Fundamentals",
    school: "IBM",
    description: "Covers fundamental concepts and tools used in software engineering practices.",
    link: "https://www.coursera.org/specializations/applied-software-engineering-fundamentals",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 12,
    title: "Software Development Lifecycle",
    school: "University of Minnesota",
    description: "Examines the phases of software development from planning to deployment and maintenance.",
    link: "https://www.coursera.org/learn/software-development-lifecycle",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 13,
    title: "Mastering Software Engineering",
    school: "Maven", 
    description: "An intermediate-level course focused on software building and maintenance skills.",
    link: "https://maven.com/articles/software-developer-courses",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 14,
    title: "Data Structures and Algorithms Specialization",
    school: "University of California San Diego",
    description: "In-depth study of data structures and algorithms essential for software development.",
    link: "https://www.coursera.org/specializations/data-structures-algorithms",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 15,
    title: "Software Testing and Automation",
    school: "University of Minnesota",
    description: "Focuses on testing methodologies and automation tools in software engineering.",
    link: "https://www.coursera.org/learn/software-testing-automation",
    level: "Intermediate",
    type: "Full Stack" 
  },
  {
    id: 16,
    title: "IBM Full Stack Software Developer Professional Certificate",
    school: "IBM",
    description: "Comprehensive training in full-stack development covering front-end and back-end technologies.",
    link: "https://www.coursera.org/professional-certificates/full-stack-cloud-developer",
    level: "Advanced",
    type: "Full Stack" 
  },
  {
    id: 17,
    title: "Fast Track to Senior Engineer",
    school: "Maven", 
    description: "A cohort-based course designed to accelerate career progression toward senior engineering roles.",
    link: "https://maven.com/articles/software-developer-courses",
    level: "Advanced",
    type: "Full Stack" 
  },
  {
    id: 18,
    title: "Building Green Software - Become an Expert",
    school: "Maven", 
    description: "Focuses on sustainable software engineering practices to reduce carbon emissions.",
    link: "https://maven.com/articles/software-developer-courses",
    level: "Advanced",
    type: "Full Stack" 
  },
  {
    id: 19,
    title: "Software Engineering Specialization (HKUST)",
    school: "Hong Kong University of Science and Technology",
    description: "Advanced topics in software engineering including systems design and architecture.",
    link: "https://www.coursera.org/specializations/software-engineering",
    level: "Advanced",
    type: "Full Stack" 
  },
  {
    id: 20,
    title: "Senior Engineer to Lead: Grow and Thrive in the Role",
    school: "Maven",
    description: "Skills development for transitioning from a senior engineer role to a leadership position.",
    link: "https://maven.com/articles/software-developer-courses",
    level: "Advanced",
    type: "Full Stack" 
  }
];


const SECourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Define levels and types based on your course data
  const levels = ["Beginner", "Intermediate", "Advanced"]; // Example levels
  const types = ["Frontend", "Backend", "Full Stack", "Mobile"]; // Example types

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
        <h1>Software Engineering Courses</h1>
        <p>Level up your tech skills</p>
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

            <div className="course-footer">
              <span className="type-badge">{course.type}</span>
            </div>
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

export default SECourses;