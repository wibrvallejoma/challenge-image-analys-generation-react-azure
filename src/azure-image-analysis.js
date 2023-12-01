import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;
const endpoint = process.env.REACT_APP_ENDPOINT_URL;

export async function analyzeImage(imageUrl) {
  const analyzeUrl = `${endpoint}/vision/v4.0/analyze`;

  try {
    const response = await axios.post(
      analyzeUrl,
      {
        url: imageUrl,
      },
      {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-Type': 'application/json',
        },
        params: {
          visualFeatures: 'Categories,Description,Color',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}