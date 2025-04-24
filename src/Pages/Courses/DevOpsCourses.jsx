import React, { useState } from "react";
import "./Courses.css";

const courseListingsData = [
  {
    id: 1,
    title: "Introduction to DevOps",
    school: "IBM",
    description:
      "A beginner-friendly course covering essential DevOps skills, cultural practices, and Agile methodologies.",
    link: "https://www.coursera.org/learn/intro-to-devops",
    level: "Beginner",
    type: "Cloud Computing" // More specific type
  },
  {
    id: 2,
    title: "Getting Started with DevOps on AWS",
    school: "Amazon Web Services",
    description:
      "Learn the basics of deploying and managing applications on AWS using DevOps practices.",
    link: "https://aws.amazon.com/training/learn-about/devops/",
    level: "Beginner",
    type: "AWS" // Specific cloud platform
  },
  {
    id: 3,
    title: "DevOps Foundations",
    school: "LinkedIn Learning",
    description:
      "Introduces the fundamental concepts of DevOps, including culture, processes, and tools.",
    link: "https://www.linkedin.com/learning/devops-foundations",
    level: "Beginner",
    type: "General DevOps" // General DevOps concepts
  },
  {
    id: 4,
    title: "DevOps for Beginners",
    school: "Udemy",
    description:
      "Covers the basics of DevOps practices, tools, and methodologies with hands-on projects.",
    link: "https://www.udemy.com/course/devops-for-beginners/",
    level: "Beginner",
    type: "General DevOps"
  },
  {
    id: 5,
    title: "Continuous Delivery & DevOps",
    school: "University of Virginia (Coursera)",
    description:
      "Focuses on continuous delivery practices and how they relate to DevOps principles.",
    link: "https://www.coursera.org/learn/continuous-delivery-devops",
    level: "Beginner",
    type: "Continuous Delivery" // Specific DevOps practice
  },
  {
    id: 6,
    title: "Learn Git and GitHub",
    school: "Coursera",
    description:
      "A foundational course on version control using Git and collaboration via GitHub, essential for DevOps.",
    link: "https://www.coursera.org/learn/git-and-github",
    level: "Beginner",
    type: "Version Control" // Essential DevOps skill
  },
  {
    id: 7,
    title: "Python Scripting for DevOps",
    school: "LearnQuest",
    description:
      "Teaches Python scripting skills necessary for automating tasks in a DevOps environment.",
    link: "https://www.learnquest.com/courses/python-scripting-for-devops/",
    level: "Beginner",
    type: "Automation" // Key DevOps skill
  },
  {
    id: 8,
    title: "DevOps Masterclass: Kubernetes, Docker, Terraform",
    school: "Udemy",
    description:
      "An intermediate course that covers key tools in the DevOps toolkit like Kubernetes and Docker.",
    link:
      "https://www.udemy.com/course/devops-masterclass-kubernetes-docker-terraform/",
    level: "Intermediate",
    type: "Containerization" // Focus on Docker and Kubernetes
  },
  {
    id: 9,
    title: "AWS Certified DevOps Engineer - Professional Exam Preparation",
    school: "Amazon Web Services",
    description:
      "Prepares students for the AWS Certified DevOps Engineer exam with hands-on labs and study materials.",
    link:
      "https://aws.amazon.com/training/course-descriptions/devops-engineer/",
    level: "Intermediate",
    type: "AWS"
  },
  {
    id: 10,
    title: "DevOps, Cloud, and Agile Foundations",
    school: "IBM",
    description:
      "Covers cloud computing principles along with Agile methodologies in a DevOps context.",
    link:
      "https://www.coursera.org/specializations/devops-cloud-agile-foundations",
    level: "Intermediate",
    type: "Cloud Computing"
  },
  {
    id: 11,
    title: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
    school: "Udemy",
    description:
      "Comprehensive course focusing on Docker and Kubernetes for container orchestration.",
    link: "https://www.udemy.com/course/docker-mastery/",
    level: "Intermediate",
    type: "Containerization"
  },
  {
    id: 12,
    title: "Azure DevOps Solutions Expert Certification",
    school: "Microsoft Learn",
    description:
      "Prepares learners for Azure DevOps certification focusing on cloud-based solutions.",
    link:
      "https://learn.microsoft.com/en-us/certifications/azure-devops-solutions-expert/",
    level: "Intermediate",
    type: "Azure" // Specific cloud platform
  },
  {
    id: 13,
    title: "Jenkins Essentials Training",
    school: "LinkedIn Learning",
    description:
      "Provides an overview of Jenkins for continuous integration and delivery in a DevOps pipeline.",
    link: "https://www.linkedin.com/learning/jenkins-essential-training",
    level: "Intermediate",
    type: "Continuous Integration" // Specific DevOps practice
  },
  {
    id: 14,
    title: "Ansible for the Absolute Beginner - Hands-On - DevOps",
    school: "Udemy",
    description:
      "Teaches automation using Ansible with practical exercises tailored for beginners to intermediate users.",
    link:
      "https://www.udemy.com/course/ansible-for-the-absolute-beginner-hands-on-devops/",
    level: "Intermediate",
    type: "Automation"
  },
  {
    id: 15,
    title: "Certified Kubernetes Administrator (CKA)",
    school: "Linux Foundation",
    description:
      "Advanced course designed to prepare students for the CKA exam focused on Kubernetes administration.",
    link:
      "https://training.linuxfoundation.org/training/certified-kubernetes-administrator-cka/",
    level: "Advanced",
    type: "Kubernetes" // Specific technology
  },
  {
    id: 16,
    title: "DevSecOps Essentials Professional Certificate",
    school: "(ISC)²",
    description:
      "Focuses on integrating security practices within the DevOps process.",
    link: "https://www.isc2.org/Certifications/DevSecOps",
    level: "Advanced",
    type: "Security" // Focus on security in DevOps
  },
  {
    id: 17,
    title: "Advanced Continuous Delivery & DevOps",
    school: "University of Virginia (Coursera)",
    description:
      "Explores advanced topics in continuous delivery and its role in effective DevOps practices.",
    link:
      "https://www.coursera.org/learn/advanced-continuous-delivery-devops",
    level: "Advanced",
    type: "Continuous Delivery"
  },
  {
    id: 18,
    title: "Site Reliability Engineering (SRE) Specialization",
    school: "Google Cloud (Coursera)",
    description:
      "Covers advanced SRE principles including service monitoring, incident response, and reliability.",
    link: "https://www.coursera.org/specializations/site-reliability-engineering",
    level: "Advanced",
    type: "Site Reliability Engineering" // Specific DevOps role
  },
  {
    id: 19,
    title: "Terraform on Azure - The Complete Guide",
    school: "Udemy",
    description:
      "An advanced course focusing on infrastructure as code using Terraform in Azure environments.",
    link:
      "https://www.udemy.com/course/terraform-on-azure-the-complete-guide/",
    level: "Advanced",
    type: "Azure"
  },
  {
    id: 20,
    title: "Mastering Microservices with Java",
    school: "Udemy",
    description:
      "Advanced training on building microservices architecture using Java within a DevOps framework.",
    link: "https://www.udemy.com/course/microservices-with-java/",
    level: "Advanced",
    type: "Microservices" // Specific architectural style
  }
];

const DevOpsCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const types = [
    "AWS",
    "Azure",
    "Cloud Computing",
    "Containerization",
    "Continuous Delivery",
    "Continuous Integration",
    "General DevOps",
    "Kubernetes",
    "Microservices",
    "Security",
    "Site Reliability Engineering",
    "Version Control",
    "Automation"
  ]; // Add all unique types

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
        <h1>DevOps Courses</h1>
        <p>Enhance your DevOps skills</p>
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

export default DevOpsCourses;