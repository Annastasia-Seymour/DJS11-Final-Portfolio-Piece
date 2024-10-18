import React from "react";
import { useNavigate , useParams } from 'react-router-dom';
import './Footer.css';
import { fetchShowData } from "../DataFetch/api";
import { useTheme } from "../Theme/ThemeContext";

export default function Footer({ showId, currentShow }) { // Accept showId and currentShow as props
  const navigate = useNavigate();  // Hook for programmatic navigation
  const { theme } = useTheme();
  const handleAddToFavorites = async () => {
    if (!showId) {
      alert('Show ID is not available. Cannot add to favorites.');
      return; // Exit if showId is undefined
    }

    try {
      // Fetch the complete show data
      const showData = await fetchShowData(showId); // Fetch the full show data

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Check if the show is already in favorites
      if (!favorites.some(fave => fave.id === showData.id)) {
        favorites.push(showData); // Store the entire show data
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
      } else {
        alert('Already in favorites!');
      }

      navigate('/favorites'); // Redirect to Favorites page
    } catch (error) {
      console.error('Error adding to favorites:', error);
      alert('Failed to add to favorites. Please try again.');
    }
  };

  return (
    
    <footer className={`audio-player ${theme}`}>
      {/* Sticky player controls */}
      <p>Now Playing: {currentShow}</p> {/* Display the current show's name */}
      
      <button onClick={handleAddToFavorites} className="favorite-button">Add to favorites</button>
    </footer>
  );
}
