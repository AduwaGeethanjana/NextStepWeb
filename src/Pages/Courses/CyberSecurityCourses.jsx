import React, { useState } from "react";
import "./Courses.css"; // You can reuse the Courses.css from the previous example

const courseListingsData = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    school: "Codecademy",
    description: "Learn the fundamentals of cybersecurity, including threats, cryptography, and network security basics.",
    link: "https://www.codecademy.com/learn/introduction-to-cybersecurity",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    school: "IBM",
    description: "An introductory course covering key cybersecurity concepts, including security controls and risk management.",
    link: "https://www.coursera.org/learn/cybersecurity-fundamentals",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 3,
    title: "Cybersecurity for Everyone",
    school: "University of Maryland",
    description: "A beginner-friendly course that introduces the basics of cybersecurity and its importance in today's world.",
    link: "https://www.coursera.org/learn/cybersecurity-for-everyone",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 4,
    title: "Free Cyber Security Courses - Essentials Series",
    school: "EC-Council",
    description: "A series of free courses covering ethical hacking, network defense, and digital forensics for beginners.",
    link: "https://www.eccouncil.org/cybersecurity-exchange/cyber-novice/free-cybersecurity-courses-beginners/",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 5,
    title: "Foundations of Cybersecurity",
    school: "Google Cloud",
    description: "This course provides foundational knowledge in cybersecurity principles and practices.",
    link: "https://www.coursera.org/learn/foundations-of-cybersecurity",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 6,
    title: "IT Fundamentals for Cybersecurity",
    school: "IBM",
    description: "Covers essential IT skills needed for a career in cybersecurity, including networking and security principles.",
    link: "https://www.coursera.org/specializations/it-fundamentals-cybersecurity",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 7,
    title: "Cyber Security Course Training For Beginners 2024",
    school: "Simplilearn (YouTube)",
    description: "A comprehensive video course covering basic to advanced cybersecurity topics with real-life scenarios.",
    link: "https://www.youtube.com/watch?v=WfWMJiPh48k",
    level: "Beginner",
    type: "Cybersecurity"
  },
  {
    id: 8,
    title: "Google Cybersecurity Professional Certificate",
    school: "Google",
    description: "Intermediate-level training that covers cybersecurity tools and techniques used in the industry.",
    link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 9,
    title: "Cybersecurity Attack and Defense Fundamentals",
    school: "EC-Council",
    description: "Focuses on understanding various cyber attacks and defense mechanisms to protect systems effectively.",
    link: "https://www.coursera.org/learn/cybersecurity-attack-defense-fundamentals",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 10,
    title: "Network Security Essentials",
    school: "Cisco Learning Network",
    description: "Covers essential concepts of network security and how to secure networks against threats.",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/training-certificates/network-security-essentials.html",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 11,
    title: "Certified Ethical Hacker (CEH) Training Course",
    school: "Simplilearn",
    description: "Prepares students for the CEH exam with hands-on labs focusing on ethical hacking techniques.",
    link: "https://www.simplilearn.com/cyber-security/ethical-hacking-certification-training",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 12,
    title: "Cyber Security Analyst Professional Certificate",
    school: "IBM",
    description: "Intermediate-level program focusing on data protection, threat detection, and incident response.",
    link: "https://www.coursera.org/professional-certificates/ibm-cyber-security-analyst",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 13,
    title: "Digital Forensics Essentials (D|FE)",
    school: "EC-Council",
    description: "Provides an understanding of digital forensics processes and methodologies.",
    link: "https://www.eccouncil.org/cybersecurity-exchange/cyber-novice/free-cybersecurity-courses-beginners/",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 14,
    title: "CompTIA Security+ Certification Training",
    school: "Cybrary",
    description: "Prepares learners for the CompTIA Security+ certification with a focus on security concepts.",
    link: "https://www.cybrary.it/course/comptia-security-plus/",
    level: "Intermediate",
    type: "Cybersecurity"
  },
  {
    id: 15,
    title: "Certified Information Systems Security Professional (CISSP)",
    school: "(ISC)²", 
    description: "Advanced certification program focusing on information security management and practices.",
    link: "https://www.isc2.org/Certifications/CISSP",
    level: "Advanced",
    type: "Cybersecurity"
  },
  {
    id: 16,
    title: "Advanced Cyber Security Training Program - MITRE ATT&CK®",
    school: "Cybrary",
    description: "Focuses on advanced techniques for threat detection using the MITRE ATT&CK framework.",
    link: "https://www.cybrary.it/course/advanced-cyber-security-training-program-mitre-attck/",
    level: "Advanced",
    type: "Cybersecurity"
  },
  {
    id: 17,
    title: "Cyber Threat Intelligence",
    school: "Recorded Future",
    description: "Advanced course on gathering and analyzing threat intelligence to enhance security posture.",
    link: "https://www.recordedfuture.com/courses/cyber-threat-intelligence",
    level: "Advanced",
    type: "Cybersecurity"
  },
  {
    id: 18,
    title: "Master’s in Cyber Security",
    school: "University of Maryland Global Campus",
    description: "Comprehensive master's program covering advanced topics in cybersecurity strategy and policy.",
    link: "https://www.umgc.edu/academic-programs/masters-degrees/cybersecurity.cfm",
    level: "Advanced",
    type: "Cybersecurity"
  },
  {
    id: 19,
    title: "Advanced Penetration Testing",
    school: "Offensive Security",
    description: "An intensive course focusing on advanced penetration testing techniques and methodologies.",
    link: "https://www.offensive-security.com/pwk-oscp/",
    level: "Advanced",
    type: "Cybersecurity"
  },
  {
    id: 20,
    title: "Cyber Security Expert Master’s Program",
    school: "Simplilearn",
    description: "A comprehensive program designed to equip professionals with advanced cybersecurity skills.",
    link: "https://www.simplilearn.com/cyber-security-expert-masters-program-training-course",
    level: "Advanced",
    type: "Cybersecurity"
  }
];

const CyberSecurityCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courseListingsData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="course-board"> 
      <div className="banner">
        <h1>Cybersecurity Courses</h1>
        <p>Enhance your cybersecurity skills</p> 
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

export default CyberSecurityCourses;