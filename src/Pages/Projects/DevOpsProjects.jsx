import React from "react";
import "./ProjectsPage.css";

const devOpsProjectData = [
  // Beginner Level Projects
  {
    title: "Set Up a Local DevOps Environment",
    description: "Install and configure tools like Git, Docker, and Jenkins on your local machine and integrate them for basic workflows.",
    level: "Beginner",
    type: "Fundamentals",
    link: "https://www.jenkins.io/doc/book/getting-started/" // Jenkins Getting Started
  },
  {
    title: "Create and Manage a Git Repository",
    description: "Set up a Git repository, track changes to files, create branches, merge them, and resolve conflicts.",
    level: "Beginner",
    type: "Version Control",
    link: "https://git-scm.com/doc" // Git Documentation
  },
  {
    title: "Basic Jenkins Pipeline",
    description: "Build a simple CI pipeline with Jenkins to automate testing and build processes for a sample project.",
    level: "Beginner",
    type: "CICD",
    link: "https://www.jenkins.io/doc/book/pipeline/" // Jenkins Pipeline Documentation
  },
  {
    title: "Dockerize a Simple Web Application",
    description: "Create a Dockerfile to containerize a basic web application and run it as a container.",
    level: "Beginner",
    type: "Containerization",
    link: "https://docs.docker.com/get-started/" // Docker Get Started Guide
  },
  {
    title: "Create a Basic Terraform Configuration",
    description: "Use Terraform to provision a simple cloud instance (e.g., an AWS EC2 or Google Cloud VM).",
    level: "Beginner",
    type: "Infrastructure as Code",
    link: "https://developer.hashicorp.com/terraform/docs" // Terraform Documentation
  },
  {
    title: "Set Up a Simple Microservices Architecture",
    description: "Split a monolithic web application into two simple services (e.g., frontend and backend) and connect them.",
    level: "Beginner",
    type: "Microservices",
    link: "https://docs.docker.com/compose/" // Docker Compose Documentation
  },
  {
    title: "Configure a Reverse Proxy Using NGINX",
    description: "Use NGINX as a reverse proxy to serve static content and forward requests to a backend application.",
    level: "Beginner",
    type: "Networking and Security",
    link: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" // NGINX Reverse Proxy
  },
  {
    title: "Basic Rolling Deployment",
    description: "Simulate a rolling deployment for a web application to gradually replace older versions with new ones.",
    level: "Beginner",
    type: "Deployment Strategies",
    link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/" // Kubernetes Rolling Update
  },

  // Intermediate Level Projects
  {
    title: "DevOps Workflow for a Team",
    description: "Set up a collaborative workflow for a team, integrating version control, CI/CD, and containerization.",
    level: "Intermediate",
    type: "Fundamentals",
    link: "https://about.gitlab.com/stages-devops-lifecycle/" // GitLab DevOps Lifecycle
  },
  {
    title: "GitOps Workflow with ArgoCD",
    description: "Implement GitOps to manage infrastructure and application deployments using ArgoCD.",
    level: "Intermediate",
    type: "Version Control",
    link: "https://argo-cd.readthedocs.io/en/stable/" // ArgoCD Documentation
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description: "Create a CI/CD pipeline using GitHub Actions for building, testing, and deploying a Node.js application.",
    level: "Intermediate",
    type: "CICD",
    link: "https://docs.github.com/en/actions" // GitHub Actions Documentation
  },
  {
    title: "Multi-Container Docker Application",
    description: "Deploy a multi-container application (e.g., frontend, backend, and database) using Docker Compose.",
    level: "Intermediate",
    type: "Containerization",
    link: "https://docs.docker.com/compose/gettingstarted/" // Docker Compose Getting Started
  },
  {
    title: "Deploy Infrastructure Using Ansible",
    description: "Use Ansible to automate the provisioning and configuration of web servers for a sample project.",
    level: "Intermediate",
    type: "Infrastructure as Code",
    link: "https://docs.ansible.com/ansible/latest/index.html" // Ansible Documentation
  },
  {
    title: "Monitor Microservices Using Prometheus and Grafana",
    description: "Deploy a microservices architecture and integrate monitoring with Prometheus and Grafana.",
    level: "Intermediate",
    type: "Microservices",
    link: "https://prometheus.io/docs/" // Prometheus Documentation
  },
  {
    title: "Set Up SSL/TLS for a Web Application",
    description: "Secure a web application with SSL/TLS certificates using Let’s Encrypt.",
    level: "Intermediate",
    type: "Networking and Security",
    link: "https://certbot.eff.org/" // Certbot for Let's Encrypt
  },
  {
    title: "Blue-Green Deployment with Kubernetes",
    description: "Implement a blue-green deployment strategy for a web application on Kubernetes.",
    level: "Intermediate",
    type: "Deployment Strategies",
    link: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" // Kubernetes Deployment
  },

  // Advanced Level Projects
  {
    title: "End-to-End DevOps Workflow",
    description: "Set up an end-to-end workflow, including version control, CI/CD, containerization, and deployment, for a real-world application.",
    level: "Advanced",
    type: "Fundamentals",
    link: "https://docs.docker.com/ci-cd/" // Docker CI/CD
  },
  {
    title: "Implement Git Hooks for Automated Checks",
    description: "Write custom Git hooks to enforce code quality checks and automate tasks before commits or merges.",
    level: "Advanced",
    type: "Version Control",
    link: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" // Git Hooks Documentation
  },
  {
    title: "Multi-Branch Jenkins Pipeline",
    description: "Create a multi-branch Jenkins pipeline to handle builds and deployments for multiple branches of a project.",
    level: "Advanced",
    type: "CICD",
    link: "https://www.jenkins.io/doc/book/pipeline/multibranch/" // Multi-Branch Pipeline
  },
  {
    title: "Kubernetes Deployment for a Complex Application",
    description: "Deploy a complex application with multiple services (e.g., frontend, backend, and database) on Kubernetes using Helm charts.",
    level: "Advanced",
    type: "Containerization",
    link: "https://helm.sh/docs/" // Helm Documentation
  },
  {
    title: "Automated Multi-Cloud Infrastructure with Terraform",
    description: "Use Terraform to provision and manage infrastructure across multiple cloud providers (e.g., AWS, Azure, and GCP).",
    level: "Advanced",
    type: "Infrastructure as Code",
    link: "https://developer.hashicorp.com/terraform/docs/cloud" // Terraform Cloud
  },
  {
    title: "Service Mesh Implementation with Istio",
    description: "Deploy and manage microservices using Istio for service mesh features like traffic routing and monitoring.",
    level: "Advanced",
    type: "Microservices",
    link: "https://istio.io/latest/docs/" // Istio Documentation
  },
  {
    title: "Design a Secure Network Architecture",
    description: "Create a network design for a cloud-based application with features like subnets, firewalls, and load balancers.",
    level: "Advanced",
    type: "Networking and Security",
    link: "https://aws.amazon.com/vpc/" // AWS VPC Documentation
  },
  {
    title: "Canary Deployment with Kubernetes",
    description: "Implement a canary deployment strategy to release features incrementally to a subset of users.",
    level: "Advanced",
    type: "Deployment Strategies",
    link: "https://istio.io/latest/docs/tasks/traffic-management/canary/" // Istio Canary Deployments
  },
];

const DevOpsProjects = () => {
  return (
    <div className="projects-page">
      <div className="banner">
        <h1>DevOps Project Ideas</h1>
        <p>Explore exciting hands-on projects to build your skills at every level.</p>
      </div>
      <div className="projects-grid">
        {devOpsProjectData.map((project, index) => (
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

export default DevOpsProjects;
