import React, { useState } from "react";
import "./Courses.css";

const courseListingsData = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    school: "Coursera (Andrew Ng)",
    description:
      "A comprehensive introduction to machine learning, covering fundamental concepts and practical applications using Python.",
    link: "https://www.coursera.org/specializations/machine-learning-introduction",
    level: "Beginner",
    type: "General Machine Learning"
  },
  {
    id: 2,
    title: "Introduction to Machine Learning for Beginners",
    school: "Microsoft",
    description:
      "This course provides a solid foundation in classical machine learning concepts and their applications in various fields.",
    link: "https://learn.microsoft.com/en-us/shows/machine-learning-for-beginners/introduction-to-machine-learning-for-beginners-machine-learning-for-beginners",
    level: "Beginner",
    type: "General Machine Learning"
  },
  {
    id: 3,
    title: "Machine Learning Crash Course",
    school: "Google",
    description:
      "A fast-paced introduction to machine learning featuring video lectures, interactive visualizations, and hands-on exercises.",
    link: "https://developers.google.com/machine-learning/crash-course",
    level: "Beginner",
    type: "General Machine Learning"
  },
  {
    id: 4,
    title: "Supervised Machine Learning: Regression and Classification",
    school: "Coursera (DeepLearning.AI)",
    description:
      "Focuses on supervised learning techniques including regression and classification algorithms.",
    link: "https://www.coursera.org/learn/supervised-learning-regression-classification",
    level: "Beginner",
    type: "Supervised Learning"
  },
  {
    id: 5,
    title: "Mathematics for Machine Learning",
    school: "Coursera (Imperial College London)",
    description:
      "Covers essential mathematical concepts needed for understanding machine learning algorithms, including linear algebra and calculus.",
    link: "https://www.coursera.org/specializations/mathematics-machine-learning",
    level: "Beginner",
    type: "Mathematics"
  },
  {
    id: 6,
    title: "Applied Data Science with Python Specialization",
    school: "University of Michigan",
    description:
      "This specialization covers data analysis and visualization techniques using Python, along with machine learning applications.",
    link: "https://www.coursera.org/specializations/data-science-python",
    level: "Intermediate",
    type: "Data Science"
  },
  {
    id: 7,
    title: "Deep Learning Specialization",
    school: "Coursera (DeepLearning.AI)",
    description:
      "A series of courses that dive into deep learning techniques, including neural networks and their applications in AI.",
    link: "https://www.coursera.org/specializations/deep-learning",
    level: "Intermediate",
    type: "Deep Learning"
  },
  {
    id: 8,
    title: "Machine Learning Engineering for Production (MLOps)",
    school: "Coursera (DeepLearning.AI)",
    description:
      "Focuses on deploying machine learning models into production environments effectively using MLOps principles.",
    link: "https://www.coursera.org/learn/machine-learning-engineering-for-production-mlops",
    level: "Intermediate",
    type: "MLOps"
  },
  {
    id: 9,
    title: "Introduction to Artificial Intelligence (AI)",
    school: "IBM",
    description:
      "Covers the basics of AI and its relationship to machine learning, including practical applications.",
    link: "https://www.coursera.org/learn/introduction-ai",
    level: "Intermediate",
    type: "Artificial Intelligence"
  },
  {
    id: 10,
    title: "Feature Engineering for Machine Learning",
    school: "University of Washington",
    description:
      "Focuses on the importance of feature engineering in building effective machine learning models.",
    link: "https://www.coursera.org/learn/feature-engineering",
    level: "Intermediate",
    type: "Feature Engineering"
  },
  {
    id: 11,
    title: "Advanced Machine Learning Specialization",
    school: "National Research University Higher School of Economics",
    description:
      "This specialization covers advanced topics in machine learning including deep learning, reinforcement learning, and more.",
    link: "https://www.coursera.org/specializations/aml",
    level: "Advanced",
    type: "General Machine Learning"
  },
  {
    id: 12,
    title: "Machine Learning for Data Science and Analytics",
    school: "FutureLearn",
    description:
      "An advanced course that explores the application of machine learning techniques in data science.",
    link: "https://www.futurelearn.com/courses/machine-learning-data-science",
    level: "Advanced",
    type: "Data Science"
  },
  {
    id: 13,
    title: "Reinforcement Learning Specialization",
    school: "University of Alberta",
    description:
      "Focuses on reinforcement learning algorithms and their applications in various domains.",
    link: "https://www.coursera.org/specializations/reinforcement-learning",
    level: "Advanced",
    type: "Reinforcement Learning"
  },
  {
    id: 14,
    title: "Natural Language Processing Specialization",
    school: "DeepLearning.AI",
    description:
      "Covers advanced techniques in natural language processing using deep learning methods.",
    link: "https://www.coursera.org/specializations/natural-language-processing",
    level: "Advanced",
    type: "Natural Language Processing"
  },
  {
    id: 15,
    title: "Data Science and Machine Learning Bootcamp with R",
    school: "Udemy",
    description:
      "An intensive bootcamp that covers advanced data science techniques and machine learning algorithms using R programming.",
    link: "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/",
    level: "Advanced",
    type: "Data Science"
  }
  // ... add more courses here
];

const MachineLearningCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const types = [
    "General Machine Learning",
    "Supervised Learning",
    "Mathematics",
    "Data Science",
    "Deep Learning",
    "MLOps",
    "Artificial Intelligence",
    "Feature Engineering",
    "Reinforcement Learning",
    "Natural Language Processing"
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
        <h1>Machine Learning Courses</h1>
        <p>Enhance your Machine Learning skills</p>
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

export default MachineLearningCourses;