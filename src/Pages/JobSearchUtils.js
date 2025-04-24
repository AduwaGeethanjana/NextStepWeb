import { PredictionServiceClient } from '@google-cloud/aiplatform';

const client = new PredictionServiceClient();

export async function fetchJobs(careerField) {
  const prompt = `List job opportunities in Sri Lanka for ${careerField}. Provide job titles, companies, descriptions, and links.`;

  try {
    const [response] = await client.predict({
      instances: [{ content: prompt }],
      parameters: { temperature: 0.7, maxOutputTokens: 300 },
    });

    // Convert LLM response into job objects
    const jobs = response.predictions[0].content
      .split('\n')
      .map(line => {
        const [title, company, description, link] = line.split('|');
        return {
          title: title?.trim(),
          company: company?.trim(),
          description: description?.trim(),
          link: link?.trim(),
        };
      });

    return jobs;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs');
  }
}

