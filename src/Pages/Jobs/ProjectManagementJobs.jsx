import React, { useState } from "react";
import "./Jobs.css";

const jobListingsData = [
  {
    id: 1,
    title: "Project Manager",
    company: "HCL Technologies",
    description: "Oversee project planning, execution, and delivery while managing resources and stakeholders.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "IT"
  },
  {
    id: 2,
    title: "IT Project Manager",
    company: "Virtusa",
    description: "Lead IT projects from initiation to completion, ensuring alignment with business objectives.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "IT"
  },
  {
    id: 3,
    title: "Senior Project Manager",
    company: "Dialog Axiata PLC",
    description: "Manage large-scale projects in telecommunications, ensuring timely delivery and quality standards.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "Telecommunications"
  },
  {
    id: 4,
    title: "Project Coordinator",
    company: "Sysco LABS",
    description: "Assist in project management activities, coordinating tasks and communication among teams.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Mid",
    type: "IT"
  },
  {
    id: 5,
    title: "IT Program Manager",
    company: "WSO2",
    description: "Oversee multiple IT projects, ensuring they align with strategic goals and deliver value.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Lead",
    type: "IT"
  },
  {
    id: 6,
    title: "Project Manager (Software Development)",
    company: "99X Technology",
    description: "Lead software development projects, managing timelines, resources, and stakeholder expectations.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Mid",
    type: "Software Development"
  },
  {
    id: 7,
    title: "Agile Project Manager",
    company: "John Keells Holdings PLC",
    description: "Implement Agile methodologies in project management to enhance team collaboration and efficiency.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "IT"
  },
  {
    id: 8,
    title: "Project Manager – Digital Transformation",
    company: "Commercial Bank",
    description: "Manage digital transformation initiatives within the bank to improve efficiency and customer experience.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Lead",
    type: "Banking"
  },
  {
    id: 9,
    title: "Technical Project Manager",
    company: "hSenid Business Solutions",
    description: "Oversee technical projects, ensuring successful implementation of technology solutions.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "IT"
  },
  {
    id: 10,
    title: "Project Management Officer (PMO)",
    company: "Axiata Group Berhad",
    description: "Support project management processes and ensure adherence to standards across projects.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Mid",
    type: "IT"
  },
  {
    id: 11,
    title: "Senior Program Manager",
    company: "Deloitte",
    description: "Lead program management efforts across various IT initiatives, focusing on strategic alignment and delivery.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Lead",
    type: "Consulting"
  },
  {
    id: 12,
    title: "Project Manager (Infrastructure)",
    company: "Ceylon Electricity Board",
    description: "Manage infrastructure projects to enhance the organization's operational capabilities.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=HNS",
    level: "Senior",
    type: "Infrastructure"
  }
];

const PMJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Mid", "Senior", "Lead"];
  const types = ["IT", "Telecommunications", "Software Development", "Banking", "Infrastructure", "Consulting"];

  const filteredJobs = jobListingsData.filter(job => {
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
        <h1>Project Management Jobs</h1>
        <p>Explore the best Project Management opportunities in IT and beyond</p>
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
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map(job => (
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

            <div className="company-info">
              {job.company}
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-footer">
              <span className="type-badge">
                {job.type}
              </span>
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

export default PMJobs;
