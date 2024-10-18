import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();  // Hook for programmatic navigation
  const [currentShow , setCurrentShow] = useState("Podcast-Name")

  const handleAddToFavorites = () => {
   
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(currentShow)) {
      favorites.push(currentShow);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      console.log(`${currentShow} added to favorites`);
    }

    navigate('/favorites');  // Redirect to Favourites page
  };

  return (
    <footer className="audio-player">
      {/* Sticky player controls */}
      <p>Now Playing: {currentShow}</p>
      {/* Add navigation to Favourites */}
      <button onClick={handleAddToFavorites} className="favorite-button">Add to favorites</button>
    </footer>
  );
}

