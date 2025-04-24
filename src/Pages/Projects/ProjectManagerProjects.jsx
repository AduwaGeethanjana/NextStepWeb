import React from "react";
import "./ProjectsPage.css";

const projectManagementProjectData = [
  // Beginner Level Projects
  {
    title: "Create a Basic Task Tracker",
    description: "Develop a simple task tracker application where users can add, update, and delete tasks, with a status (e.g., To Do, In Progress, Done).",
    level: "Beginner",
    type: "Project Management Tools",
    link: "https://www.smartsheet.com/content/task-tracker-template", // Example task tracker template
  },
  {
    title: "Project Timeline for a Fictional Event",
    description: "Create a project timeline for organizing an event using Gantt charts.",
    level: "Beginner",
    type: "Fundamentals",
    link: "https://www.microsoft.com/en-us/microsoft-365/project/project-management-software", // Microsoft Project documentation
  },
  {
    title: "Develop a Project Charter Template",
    description: "Write a project charter for a fictional project, including objectives, stakeholders, budget, and deliverables.",
    level: "Beginner",
    type: "Project Initiation",
    link: "https://www.projectmanagementdocs.com/template/project-charter/", // Project Charter template
  },
  {
    title: "Waterfall Model Workflow",
    description: "Design a simple Waterfall Model workflow for a small project, such as building a website.",
    level: "Beginner",
    type: "Project Methodologies",
    link: "https://lucid.app/documents", // Lucidchart for flow diagrams
  },
  {
    title: "Risk Identification Exercise",
    description: "Identify and list risks for a project, categorize them, and suggest mitigation strategies.",
    level: "Beginner",
    type: "Risk Management",
    link: "https://www.projectmanagement.com/pages/264960/Risk-Management", // Risk Management resources
  },
  {
    title: "Create a Scope Statement for a Small Project",
    description: "Define the scope for a small project, including objectives, deliverables, exclusions, and constraints.",
    level: "Beginner",
    type: "Scope Management",
    link: "https://www.projectmanagementdocs.com/template/scope-statement/", // Scope Statement template
  },

  // Intermediate Level Projects
  {
    title: "Build a Project Dashboard",
    description: "Create an interactive dashboard to track project progress, budgets, and deadlines using Excel or Power BI.",
    level: "Intermediate",
    type: "Project Management Tools",
    link: "https://www.datapine.com/blog/project-dashboard-template/", // Project Dashboard template
  },
  {
    title: "Project Lifecycle Document",
    description: "Document all phases of a project lifecycle for a small project.",
    level: "Intermediate",
    type: "Fundamentals",
    link: "https://www.projectmanagement.com/pages/251692/Project-Life-Cycle", // Project Life Cycle overview
  },
  {
    title: "Develop a Project Proposal Document",
    description: "Write a detailed project proposal for a real-world scenario, including goals, estimated budget, and timeline.",
    level: "Intermediate",
    type: "Project Initiation",
    link: "https://www.projectmanagementdocs.com/template/project-proposal/", // Project Proposal template
  },
  {
    title: "Agile Sprint Plan",
    description: "Design a sprint plan for a 2-week Agile sprint, including user stories, tasks, and a backlog.",
    level: "Intermediate",
    type: "Project Methodologies",
    link: "https://www.atlassian.com/agile/project-management/sprint", // Agile Sprint Planning
  },
  {
    title: "Risk Assessment Matrix",
    description: "Create a risk assessment matrix for a project, prioritizing risks based on impact and likelihood.",
    level: "Intermediate",
    type: "Risk Management",
    link: "https://www.smartsheet.com/content/risk-assessment-matrix-template", // Risk Assessment Matrix template
  },
  {
    title: "Develop a Work Breakdown Structure (WBS)",
    description: "Create a WBS for a project, breaking it down into deliverables, sub-deliverables, and work packages.",
    level: "Intermediate",
    type: "Scope Management",
    link: "https://www.projectmanagementdocs.com/template/work-breakdown-structure/", // WBS template
  },

  // Advanced Level Projects
  {
    title: "Build a Custom Project Management Tool",
    description: "Create a web-based project management tool to manage tasks, timelines, and resources, including user authentication.",
    level: "Advanced",
    type: "Project Management Tools",
    link: "https://realpython.com/flask-google-login/", // Flask user authentication tutorial
  },
  {
    title: "Comprehensive Project Documentation",
    description: "Create detailed documentation for a real-world project, including all phases with key deliverables.",
    level: "Advanced",
    type: "Fundamentals",
    link: "https://www.smartsheet.com/templates/project-documentation", // Project Documentation templates
  },
  {
    title: "Real-World Project Feasibility Study",
    description: "Conduct a feasibility study for a real-world project, evaluating technical, financial, and operational feasibility.",
    level: "Advanced",
    type: "Project Initiation",
    link: "https://www.projectmanagementdocs.com/template/feasibility-study/", // Feasibility Study template
  },
  {
    title: "Implement a Hybrid Agile-Waterfall Framework",
    description: "Design and execute a project using a hybrid Agile-Waterfall approach.",
    level: "Advanced",
    type: "Project Methodologies",
    link: "https://www.atlassian.com/agile/agile-at-scale/hybrid-agile", // Hybrid Agile-Waterfall guide
  },
  {
    title: "Comprehensive Risk Management Plan",
    description: "Develop a full risk management plan for a complex project.",
    level: "Advanced",
    type: "Risk Management",
    link: "https://www.projectmanagementdocs.com/template/risk-management-plan/", // Risk Management Plan template
  },
  {
    title: "Scope Change Management System",
    description: "Build a system to handle and document scope changes in a project.",
    level: "Advanced",
    type: "Scope Management",
    link: "https://realpython.com/flask-by-example-part-1-project-setup/", // Flask project example
  },
];

const ProjectManagementProjects = () => {
  return (
    <div className="projects-page">
      <div className="banner">
        <h1>Project Management Project Ideas</h1>
        <p>Explore exciting hands-on projects to enhance your project management skills.</p>
      </div>
      <div className="projects-grid">
        {projectManagementProjectData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagementProjects;
