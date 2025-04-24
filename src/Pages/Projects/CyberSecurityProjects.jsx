import React from "react";
import "./ProjectsPage.css";

const cybersecurityProjectData = [
  // Beginner Level Projects
  {
    title: "Create a Basic Password Strength Checker",
    description: "Build a tool to evaluate the strength of user passwords and provide recommendations for stronger passwords.",
    level: "Beginner",
    type: "Fundamentals",
    link: "https://www.geeksforgeeks.org/password-strength-checker-in-python/" // Password strength checker example
  },
  {
    title: "Identify Common Malware Types in a Dataset",
    description: "Analyze a malware dataset to categorize types of malware (e.g., viruses, worms, Trojan horses).",
    level: "Beginner",
    type: "Threats and Vulnerabilities",
    link: "https://github.com/AmanPriyanshu/Malware-Analysis" // Malware analysis dataset example
  },
  {
    title: "Simulate a Firewall Rule Set",
    description: "Create a basic program to simulate a firewall that allows or blocks traffic based on user-defined rules.",
    level: "Beginner",
    type: "Network Security",
    link: "https://www.tutorialspoint.com/iptables/index.htm" // IP Tables tutorial
  },
  {
    title: "Implement Basic HTTPS Communication",
    description: "Set up a simple web server with HTTPS using an SSL certificate (self-signed or Let's Encrypt).",
    level: "Beginner",
    type: "Secure Communication",
    link: "https://letsencrypt.org/getting-started/" // HTTPS setup with Let's Encrypt
  },
  {
    title: "Two-Factor Authentication (2FA) Demo",
    description: "Build a small system where users log in with a password and receive a one-time code via email or SMS.",
    level: "Beginner",
    type: "Authentication and Access Control",
    link: "https://authy.com/what-is-2fa/" // Intro to 2FA
  },
  {
    title: "Create a Cybersecurity Policy Document",
    description: "Write a sample cybersecurity policy for a small organization, referencing frameworks like NIST or ISO 27001.",
    level: "Beginner",
    type: "Risk Management and Frameworks",
    link: "https://csrc.nist.gov/publications" // NIST resources
  },
  {
    title: "Set Up a Vulnerability Scanner",
    description: "Use tools like OpenVAS or Nessus to scan a local network for vulnerabilities and create a report.",
    level: "Beginner",
    type: "Security Testing",
    link: "https://www.openvas.org/" // OpenVAS documentation
  },

  // Intermediate Level Projects
  {
    title: "Build a File Integrity Monitoring Tool",
    description: "Create a script to monitor and log changes to files in a directory, alerting users if unauthorized changes are detected.",
    level: "Intermediate",
    type: "Fundamentals",
    link: "https://www.tecmint.com/integrity-check-tools-for-linux/" // File integrity check tools
  },
  {
    title: "Simulate a Phishing Attack",
    description: "Create a fake phishing email and landing page to demonstrate how attackers steal credentials.",
    level: "Intermediate",
    type: "Threats and Vulnerabilities",
    link: "https://github.com/trustedsec/social-engineer-toolkit" // Social Engineering Toolkit
  },
  {
    title: "Build a Simple Intrusion Detection System (IDS)",
    description: "Create a basic IDS that monitors network traffic and identifies suspicious patterns.",
    level: "Intermediate",
    type: "Network Security",
    link: "https://scapy.readthedocs.io/en/latest/" // Scapy library documentation
  },
  {
    title: "Encrypt Data Using AES or RSA",
    description: "Develop a tool that allows users to encrypt and decrypt files using AES or RSA encryption algorithms.",
    level: "Intermediate",
    type: "Secure Communication",
    link: "https://cryptography.io/en/latest/" // Cryptography library
  },
  {
    title: "Role-Based Access Control (RBAC) System",
    description: "Build a web application where users with different roles have access to specific features or pages.",
    level: "Intermediate",
    type: "Authentication and Access Control",
    link: "https://flask-user.readthedocs.io/en/latest/roles_required.html" // Flask roles-based access control
  },
  {
    title: "Perform a Cybersecurity Risk Assessment",
    description: "Perform a risk assessment for a small business, identify potential threats, and recommend mitigations based on NIST standards.",
    level: "Intermediate",
    type: "Risk Management and Frameworks",
    link: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" // NIST SP 800-30 Risk Management
  },
  {
    title: "Conduct Penetration Testing on a Virtual Machine",
    description: "Use tools like Metasploit to perform penetration testing on a vulnerable virtual machine (e.g., Metasploitable).",
    level: "Intermediate",
    type: "Security Testing",
    link: "https://metasploit.help.rapid7.com/" // Metasploit documentation
  },

  // Advanced Level Projects
  {
    title: "Develop a Cybersecurity Awareness Training Program",
    description: "Create an interactive training module or video to educate employees about common cybersecurity threats like phishing and malware.",
    level: "Advanced",
    type: "Fundamentals",
    link: "https://www.coursera.org/courses?query=cybersecurity%20awareness" // Cybersecurity awareness training
  },
  {
    title: "Analyze Zero-Day Vulnerabilities in Public Repositories",
    description: "Research and document zero-day vulnerabilities from public resources like CVE databases and demonstrate possible mitigation strategies.",
    level: "Advanced",
    type: "Threats and Vulnerabilities",
    link: "https://cve.mitre.org/" // CVE database
  },
  {
    title: "Set Up a Network Security Monitoring System",
    description: "Deploy and configure a network monitoring system (e.g., Snort or Suricata) to detect and alert on suspicious activity.",
    level: "Advanced",
    type: "Network Security",
    link: "https://suricata.io/" // Suricata documentation
  },
  {
    title: "Build a Secure Chat Application",
    description: "Develop a chat application that uses end-to-end encryption for secure communication.",
    level: "Advanced",
    type: "Secure Communication",
    link: "https://socket.io/" // Secure chat with Socket.IO
  },
  {
    title: "Implement Biometric Authentication",
    description: "Build a system that uses fingerprint or facial recognition for user authentication.",
    level: "Advanced",
    type: "Authentication and Access Control",
    link: "https://opencv.org/" // OpenCV library
  },
  {
    title: "Develop a Cybersecurity Incident Response Plan",
    description: "Create a comprehensive incident response plan for an organization, including steps for detection, containment, and recovery.",
    level: "Advanced",
    type: "Risk Management and Frameworks",
    link: "https://www.sans.org/white-papers/incident-response/" // Incident response documentation
  },
  {
    title: "Perform Advanced Penetration Testing with Custom Exploits",
    description: "Create custom exploits to test vulnerabilities in a virtual environment and document the results.",
    level: "Advanced",
    type: "Security Testing",
    link: "https://www.offensive-security.com/" // Offensive Security resources
  },
];

const CybersecurityProjects = () => {
  return (
    <div className="projects-page">
      <div className="banner">
        <h1>Cybersecurity Project Ideas</h1>
        <p>Explore exciting hands-on projects to build your skills at every level.</p>
      </div>
      <div className="projects-grid">
        {cybersecurityProjectData.map((project, index) => (
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

export default CybersecurityProjects;
