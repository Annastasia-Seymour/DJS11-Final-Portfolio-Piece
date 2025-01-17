// api.js
const BASE_URL = 'https://podcast-api.netlify.app';

// Fetch preview data (summary of shows)
export async function fetchPreviewData() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching preview data:', error);
    throw error;
  }
}

// Fetch detailed show data (including seasons and episodes) by show ID
export async function fetchShowData(showId) {
  try {
    const response = await fetch(`${BASE_URL}/id/${showId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching show data:', error);
    throw error;
  }
}

// Fetch genre data (if needed) by genre ID
export async function fetchGenreData(genreId) {
  try {
    const response = await fetch(`${BASE_URL}/genre/${genreId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching genre data:', error);
    throw error;
  }
}
//fetch specifically the show ID to display in favorites
export const fetchShowById = async (id) => {
  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch show data');
  }
  const data = await response.json();
  return data;
};