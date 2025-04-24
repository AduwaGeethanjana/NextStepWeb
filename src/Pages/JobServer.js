import express from 'express';
import { fetchJobs } from './JobSearchUtils.js'; // Import as a named export
 // Update import path as needed
 import cors from 'cors';

 
  

const app = express();
app.use(
    cors({
      origin: 'http://localhost:5174', // Replace with your frontend URL
    })
  );

app.use(express.json());

app.post('/fetch-jobs', async (req, res) => {
  const { careerField } = req.body;

  try {
    if (!careerField) {
      throw new Error('Career field is required.');
    }

    console.log(`Fetching jobs for: ${careerField}`); // Log the requested career field
    const jobs = await fetchJobs(careerField);

    console.log(`Jobs fetched successfully: ${JSON.stringify(jobs)}`); // Log job data for debugging
    res.status(200).json({ jobs });
  } catch (error) {
    console.error('Error in /fetch-jobs endpoint:', error); // Log the full error for debugging
    res.status(500).json({ error: error.message });
  }
});