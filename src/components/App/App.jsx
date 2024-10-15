import React, { useState, useEffect } from 'react';
import './App.css'; // Include your styles
import 'bootstrap/dist/css/bootstrap.min.css';

import FetchAllData from '../DataFetch/FetchData.jsx'; // Fetch all data component
import { fetchPreviewData, fetchEpisodes } from '../DataFetch/api.js'; // Import fetch functions
import FetchDataPreview from '../DataFetch/FetchData.jsx';

function App() {
  const [selectedShowId, setSelectedShowId] = useState(null); // State for the selected show
  const [episodes, setEpisodes] = useState([]); // State for the fetched episodes

  // Fetch episodes when a show is selected
  useEffect(() => {
    const getEpisodes = async () => {
      if (selectedShowId) {
        const data = await fetchEpisodes(selectedShowId);
        setEpisodes(data.episodes || []); // Adjust this line based on your API response structure
      }
    };

    getEpisodes();
  }, [selectedShowId]);

  // Sample shows for demonstration
  const shows = [
    { id: 1, name: "Show 1" },
    { id: 2, name: "Show 2" },
    // Add more shows as needed
  ];

  return (
    <div className="app-container">
      <div>
        <FetchDataPreview />
      </div>

      <div>
        <h2>Available Shows</h2>
        <ul>
          {shows.map(show => (
            <li key={show.id} onClick={() => setSelectedShowId(show.id)} style={{ cursor: 'pointer' }}>
              {show.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Display episodes for the selected show */}
      {selectedShowId && (
        <div>
          <h2>Episodes:</h2>
          <ul>
            {episodes.length > 0 ? (
              episodes.map((episode, index) => (
                <li key={index}>
                  {episode.title} 
                  <audio controls src="https://example.com/placeholder.mp3" />
                  {/* Replace the placeholder URL with the actual episode audio source */}
                </li>
              ))
            ) : (
              <p>No episodes available.</p>
            )}
          </ul>
        </div>
      )}

      <div className="App">
        <button className="btn btn-primary">Click me</button>
      </div>
    </div>
  );
}

export default App;
