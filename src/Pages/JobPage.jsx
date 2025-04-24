import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const career = queryParams.get('career'); // Get the career from the query parameter

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-jobs', { // Update URL if hosted elsewhere
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ careerField: career }), // Send career field to the server
        });

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        setJobs(data.jobs); // Assume jobs are returned as an array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [career]);

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error fetching jobs: {error}</div>;
  }

  return (
    <div className="jobs-page">
      <h2>Job Opportunities for {career}</h2>
      <ul className="job-list">
        {jobs.map((job, index) => (
          <li key={index} className="job-item">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">View Job</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsPage;
