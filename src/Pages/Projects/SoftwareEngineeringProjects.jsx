import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";
import { auth, db } from "../../Pages/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const projectData = [
  // Beginner Level Projects
  {
    title: "Create a simple calculator",
    description: "Perform basic operations like addition, subtraction, multiplication, and division.",
    level: "Beginner",
    type: "Logic",
  },
  {
    title: "Design a number guessing game",
    description: "Develop a game that generates random numbers and provides hints for guesses.",
    level: "Beginner",
    type: "Logic",
  },
  {
    title: "Build a to-do list application",
    description: "Manage and store tasks using arrays.",
    level: "Beginner",
    type: "Data Structures",
  },
  {
    title: "Implement a queue system",
    description: "Build a queue to manage customer support tickets.",
    level: "Beginner",
    type: "Data Structures",
  },
  {
    title: "Create a student management system",
    description: "Use OOP to manage students, courses, and grades.",
    level: "Beginner",
    type: "OOP",
  },
  {
    title: "Develop a basic banking system",
    description: "Support account creation, deposits, and withdrawals using OOP principles.",
    level: "Beginner",
    type: "OOP",
  },
  {
    title: "Set up a GitHub repository",
    description: "Create a project with multiple branches and resolve merge conflicts.",
    level: "Beginner",
    type: "Git",
  },
  {
    title: "Optimize sorting",
    description: "Refactor a sorting algorithm from Bubble Sort to Quick Sort.",
    level: "Beginner",
    type: "Code Optimization",
  },
  {
    title: "Debug a buggy program",
    description: "Write test cases to find and fix intentional bugs.",
    level: "Beginner",
    type: "Debugging",
  },
  {
    title: "Create a weather app",
    description: "Fetch and display weather data using a free weather API.",
    level: "Beginner",
    type: "APIs",
  },
  // Intermediate Level Projects
  {
    title: "Design a maze generator",
    description: "Use algorithms like DFS or BFS to create and solve mazes.",
    level: "Intermediate",
    type: "Logic",
  },
  {
    title: "Implement a contact book",
    description: "Use a hash table for fast searching.",
    level: "Intermediate",
    type: "Data Structures",
  },
  {
    title: "Build a library management system",
    description: "Enable issuing and returning books using OOP principles.",
    level: "Intermediate",
    type: "OOP",
  },
  {
    title: "Create a Git workflow simulator",
    description: "Simulate collaborative tasks with Git branches and commits.",
    level: "Intermediate",
    type: "Git",
  },
  {
    title: "Optimize a Fibonacci calculator",
    description: "Refactor to use dynamic programming for better performance.",
    level: "Intermediate",
    type: "Code Optimization",
  },
  {
    title: "Build a blogging platform",
    description: "Use a relational database to manage posts, users, and comments.",
    level: "Intermediate",
    type: "Database",
  },
  {
    title: "Develop a RESTful API",
    description: "Create a CRUD-enabled API for a notes-taking app.",
    level: "Intermediate",
    type: "APIs",
  },
  {
    title: "Solve Tower of Hanoi",
    description: "Use recursion to solve the Tower of Hanoi problem.",
    level: "Intermediate",
    type: "Recursive Functions",
  },
  // Advanced Level Projects
  {
    title: "Develop a Sudoku solver",
    description: "Build an AI-based Sudoku solver using backtracking algorithms.",
    level: "Advanced",
    type: "Logic",
  },
  {
    title: "Build a social network graph",
    description: "Use BFS/DFS to suggest friends based on connections.",
    level: "Advanced",
    type: "Data Structures",
  },
  {
    title: "Create a multiplayer game backend",
    description: "Implement OOP mechanics for multiplayer scoring and events.",
    level: "Advanced",
    type: "OOP",
  },
  {
    title: "Build a Git visualization tool",
    description: "Represent Git commits and branches as graphs.",
    level: "Advanced",
    type: "Git",
  },
  {
    title: "Optimize a machine learning model",
    description: "Speed up model training and inference for large datasets.",
    level: "Advanced",
    type: "Code Optimization",
  },
  {
    title: "Develop a distributed database system",
    description: "Implement replication and sharding for scalability.",
    level: "Advanced",
    type: "Database",
  },
  {
    title: "Create an API aggregator",
    description: "Combine multiple APIs into a single interface.",
    level: "Advanced",
    type: "APIs",
  },
  {
    title: "Solve graph coloring",
    description: "Use recursive backtracking to solve graph coloring problems.",
    level: "Advanced",
    type: "Recursive Functions",
  },
];

const SEProjectsPage = () => {
    return (
      <div className="projects-page">
        <div className="banner">
          <h1>Software Engineering Project Ideas</h1>
          <p>Explore exciting hands-on projects to build your skills at every level.</p>
        </div>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className={`level-badge ${project.level.toLowerCase()}`}>
                  {project.level}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="type-badge">{project.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SEProjectsPage;