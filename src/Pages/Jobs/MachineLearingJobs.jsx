import React, { useState } from "react";
import "./Jobs.css";

const jobListingsData = [
  {
    id: 1,
    title: "Senior Machine Learning Engineer",
    company: "John Keells Holdings PLC",
    description:
      "Develop and deploy innovative machine learning models and algorithms, optimize pipelines, and implement MLOPS best practices.",
    link: "https://www.example.com/job1",
    level: "Senior",
    type: "MLOps",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    company: "Hype Invention",
    description:
      "Design and create machine learning systems, optimize existing libraries, and document processes.",
    link: "https://boards.rooster.jobs/jobs/36182",
    level: "Mid",
    type: "Development",
  },
  {
    id: 3,
    title: "Software Engineer – Artificial Intelligence / Machine Learning",
    company: "CBC Tech Solutions Ltd",
    description:
      "Develop machine learning models for enterprise use cases and collaborate on programming solutions using Python and PyTorch.",
    link: "https://rooster.jobs/job/438759",
    level: "Mid",
    type: "AI/ML Development",
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    company: "Various Remote Opportunities",
    description:
      "Work on deep learning and NLP tasks, optimize machine learning models for various applications.",
    link: "https://www.remoterocketship.com/country/sri-lanka/jobs/machine-learning-engineer",
    level: "Mid",
    type: "Remote",
  },
  {
    id: 5,
    title: "AI/Machine Learning Lead",
    company: "Algonomy",
    description:
      "Lead AI initiatives, develop ML algorithms, and manage data engineering tasks.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Lead",
    type: "Leadership",
  },
  {
    id: 6,
    title: "ML Lead",
    company: "Algonomy",
    description:
      "Oversee machine learning projects and collaborate with cross-functional teams to deliver solutions.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Lead",
    type: "Leadership",
  },
  {
    id: 7,
    title: "Senior Data Engineer (Python)",
    company: "CMS (Pvt) Ltd",
    description:
      "Focus on data pipeline construction and optimization using Python for machine learning applications.",
    link: "https://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Senior",
    type: "Data Engineering",
  },
  {
    id: 8,
    title: "AI Training Engineer (Remote | Flexi-time)",
    company: "Various Opportunities",
    description:
      "Train AI models and improve their performance through data analysis and algorithm enhancement.",
    link: "https://lk.linkedin.com/jobs/machine-learning-jobs",
    level: "Entry",
    type: "Remote",
  },
  {
    id: 9,
    title: "Machine Learning Engineer (Remote)",
    company: "Crossover",
    description:
      "Engage in high-level AI projects, focusing on innovative software solutions utilizing machine learning techniques.",
    link: "https://www.crossover.com/job-roles/ai-engineer/sri-lanka",
    level: "Mid",
    type: "Remote",
  },
  {
    id: 10,
    title: "AI/ML Engineer",
    company: "Various Companies",
    description:
      "Develop and implement AI/ML solutions across different sectors, focusing on real-world applications.",
    link: "https://lk.linkedin.com/jobs/machine-learning-engineer-jobs",
    level: "Mid",
    type: "Development",
  },
];

const MLJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Entry", "Mid", "Senior", "Lead"];
  const types = ["MLOps", "Development", "Remote", "Leadership", "Data Engineering"];

  const filteredJobs = jobListingsData.filter((job) => {
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
        <h1>Machine Learning Engineering Jobs</h1>
        <p>Discover your next opportunity in ML and AI</p>
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

export default MLJobs;
