import React, { useState } from "react";
import "./Jobs.css";

const cybersecurityJobsData = [
  {
    id: 1,
    title: "Cyber Security Engineer",
    company: "TechOne Global",
    description:
      "Responsible for implementing security measures to protect information systems and ensure compliance with security standards.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Engineering",
  },
  {
    id: 2,
    title: "Information Security Engineer",
    company: "Dialog Axiata PLC",
    description:
      "Develop and implement security solutions, monitor security systems, and respond to incidents.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Information Security",
  },
  {
    id: 3,
    title: "Network Security Engineer",
    company: "hSenid Business Solutions",
    description:
      "Manage network security infrastructure and ensure the protection of sensitive data.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Networking",
  },
  {
    id: 4,
    title: "Cybersecurity Analyst",
    company: "WSO2",
    description:
      "Analyze security threats and vulnerabilities, conduct risk assessments, and implement security measures.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Entry",
    type: "Analysis",
  },
  {
    id: 5,
    title: "Security Operations Center (SOC) Analyst",
    company: "Commercial Bank",
    description:
      "Monitor and respond to security incidents, analyze security alerts, and provide incident reports.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Operations",
  },
  {
    id: 6,
    title: "Cybersecurity Consultant",
    company: "Deloitte",
    description:
      "Provide expert advice on cybersecurity strategies and risk management practices to clients.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Senior",
    type: "Consulting",
  },
  {
    id: 7,
    title: "Penetration Tester",
    company: "Sysco LABS",
    description:
      "Conduct penetration testing and vulnerability assessments to identify security weaknesses.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Testing",
  },
  {
    id: 8,
    title: "IT Security Manager",
    company: "John Keells Holdings PLC",
    description:
      "Oversee the organization’s IT security strategy and manage the cybersecurity team.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Lead",
    type: "Management",
  },
  {
    id: 9,
    title: "Application Security Engineer",
    company: "Virtusa",
    description:
      "Ensure the security of applications by identifying vulnerabilities and implementing secure coding practices.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Senior",
    type: "Application Security",
  },
  {
    id: 10,
    title: "Cybersecurity Specialist",
    company: "Axiata Group Berhad",
    description:
      "Develop cybersecurity policies and procedures to protect organizational assets from cyber threats.",
    link: "https://www.drjobpro.com/sri-lanka/cyber-security-jobs",
    level: "Mid",
    type: "Specialist",
  },
];

const CybersecurityJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Entry", "Mid", "Senior", "Lead"];
  const types = [
    "Engineering",
    "Information Security",
    "Networking",
    "Analysis",
    "Operations",
    "Consulting",
    "Testing",
    "Management",
    "Application Security",
    "Specialist",
  ];

  const filteredJobs = cybersecurityJobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !selectedLevel || job.level === selectedLevel;
    const matchesType = !selectedType || job.type === selectedType;
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="job-board">
      <div className="banner">
        <h1>Cybersecurity Jobs</h1>
        <p>Explore top cybersecurity opportunities in Sri Lanka</p>
      </div>

      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search jobs by title, company, or description..."
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

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <a
            key={job.id}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="job-card"
          >
            <div className="job-card-header">
              <h2>{job.title}</h2>
              <span className={`level-badge ${job.level.toLowerCase()}`}>
                {job.level}
              </span>
            </div>

            <div className="company-info">{job.company}</div>

            <p className="job-description">{job.description}</p>

            <div className="job-footer">
              <span className="type-badge">{job.type}</span>
            </div>
          </a>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="no-results">
          <p>No jobs found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default CybersecurityJobs;
