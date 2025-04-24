import React, { useState } from "react";
import "./Jobs.css";

const jobListingsData = [
  {
    id: 1,
    title: "Senior Developer - Power Platform",
    company: "Sabio Connect Global Private Limited",
    description: "Develop and maintain Power Platform solutions.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Senior",
    type: "Full Stack"
  },
  {
    id: 2,
    title: "Lead Power Platform Developer",
    company: "Sabio Connect Global Private Limited",
    description: "Lead a team of developers and architect Power Platform solutions.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Lead",
    type: "Full Stack"
  },
  {
    id: 3,
    title: "Web Developer",
    company: "AISIT Consulting Services PVT LTD",
    description: "Develop and maintain web applications.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Mid",
    type: "Frontend"
  },
  {
    id: 4,
    title: "PHP Developer",
    company: "AISIT Consulting Services PVT LTD",
    description: "Develop and maintain PHP-based applications.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Mid",
    type: "Backend"
  },
  {
    id: 5,
    title: "Junior Software Engineers",
    company: "DSN Enterprises",
    description: "Entry-level software engineering roles.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Junior",
    type: "Full Stack"
  },
  {
    id: 6,
    title: "Golang Developer (Backend Developer)",
    company: "DB International Technology",
    description: "Develop backend services using Golang.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Mid",
    type: "Backend"
  },
  {
    id: 7,
    title: "Frontend Developer (Unity)",
    company: "DB International Technology",
    description: "Develop Unity-based frontend applications.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Mid",
    type: "Frontend"
  },
  {
    id: 8,
    title: "Trainee Software Engineer",
    company: "Genius Soft",
    description: "Training program for aspiring software engineers.",
    link: "https://ikman.lk/en/ads/sri-lanka/software-engineer-jobs",
    level: "Entry",
    type: "Full Stack"
  },
  {
    id: 16,
    title: "Senior Software Engineer / Associate Technical Lead - Full-Stack",
    company: "Villvay",
    description: "Full-stack software development and leadership.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp",
    level: "Senior",
    type: "Full Stack"
  },
  {
    id: 17,
    title: "Senior Software Architect",
    company: "ATeam Software",
    description: "Design and architect software systems.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp",
    level: "Architect",
    type: "Full Stack"
  }
];

const SEJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Entry", "Junior", "Mid", "Senior", "Lead", "Architect"];
  const types = ["Frontend", "Backend", "Full Stack"];

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
        <h1>Software Engineering Jobs</h1>
        <p>Find your next opportunity in tech</p>
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

export default SEJobs;