import React, { useState } from "react";
import "./Jobs.css";

const devOpsJobsData = [
  {
    id: 1,
    title: "DevOps Engineer",
    company: "eBEYONDS (Pvt) Ltd",
    description:
      "Responsible for streamlining infrastructure and code using CI/CD pipelines and Infrastructure as Code.",
    link: "https://www.ebeyonds.com/careers/devops-engineers.html",
    level: "Mid",
    type: "CI/CD",
  },
  {
    id: 2,
    title: "Senior DevOps Engineer",
    company: "Cambio Software Engineering",
    description:
      "Maintain and build the technical infrastructure for healthcare solutions, implementing DevOps best practices.",
    link: "https://careers.cambio.lk/jobs/5004269-devops-engineer-senior-devops-engineer",
    level: "Senior",
    type: "Healthcare",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Moresand Technologies",
    description:
      "Configure DevOps tools for the team, monitor infrastructure, and enhance productivity through automation.",
    link: "https://www.rooster.jobs/jobs/3277",
    level: "Mid",
    type: "Automation",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Sysco LABS",
    description:
      "Collaborate with development teams to enhance software delivery processes and maintain system reliability.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Mid",
    type: "Collaboration",
  },
  {
    id: 5,
    title: "Junior DevOps Engineer",
    company: "3CS",
    description:
      "Assist in maintaining cloud infrastructure and support deployment processes.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Entry",
    type: "Cloud",
  },
  {
    id: 6,
    title: "Senior Associate – Client Support",
    company: "INNODATA LANKA (PVT) LTD",
    description:
      "Provide technical support and solutions to clients while managing various operational tasks.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Senior",
    type: "Client Support",
  },
  {
    id: 7,
    title: "TechSecOps Coordinator",
    company: "SevenX Lanka (Pvt) Ltd",
    description:
      "Coordinate security operations and analysis within the tech environment.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Mid",
    type: "Security",
  },
  {
    id: 8,
    title: "Site Reliability Engineer",
    company: "Commercial Bank",
    description:
      "Ensure system reliability and performance while implementing best practices in operations.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Mid",
    type: "Operations",
  },
  {
    id: 9,
    title: "DevSecOps Engineer (Remote)",
    company: "Rhino Partners Pte Ltd",
    description:
      "Focus on security aspects of DevOps processes and implement secure coding practices.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Mid",
    type: "Remote Security",
  },
  {
    id: 10,
    title: "Technical Lead – DevOps",
    company: "Sysco LABS",
    description:
      "Lead a team in implementing DevOps strategies and improving software delivery pipelines.",
    link: "http://www.topjobs.lk/applicant/vacancybyfunctionalarea.jsp?FA=SDQ",
    level: "Lead",
    type: "Leadership",
  },
];

const DevOpsJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const levels = ["Entry", "Mid", "Senior", "Lead"];
  const types = ["CI/CD", "Healthcare", "Automation", "Collaboration", "Cloud", "Security", "Remote Security", "Leadership"];

  const filteredJobs = devOpsJobsData.filter((job) => {
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
        <h1>DevOps Engineering Jobs</h1>
        <p>Find your next opportunity in DevOps and Site Reliability</p>
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

export default DevOpsJobs;
