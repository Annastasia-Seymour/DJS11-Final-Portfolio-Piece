const API_BASE_URL = 'https://podcast-api.netlify.app';

// Fetch preview data
export const fetchPreviewData = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch preview data');
  }
  const data = await response.json();
  return data;
};

// Fetch genre data by ID
export const fetchGenreData = async (id) => {
  const response = await fetch(`${API_BASE_URL}/genre/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch genre data');
  }
  const data = await response.json();
  return data;
};

// Fetch show data by ID
export const fetchShowData = async (id) => {
  const response = await fetch(`${API_BASE_URL}/id/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch show data');
  }
  const data = await response.json();
  return data;
};
