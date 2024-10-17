import React, { useState } from "react"; // Import useState
import './Header.css';
import { Link } from "react-router-dom";

import SearchPage from "../../pages/Search/SearchPage";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFilter = (genre) => {
    setSelectedGenre(genre); // This will trigger the filtering
    closeModal(); // Optionally close the modal after selection
  };

  return (
    <header className="banner-container">
      <Link to="/home">
        <div className="custom-logo">Dinosaur.</div>
      </Link>
      <div className="custom-navbar">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/show-all">
          <button>Show all</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link >
        <Link to="/search">
        <button >Search</button>        
        </Link>
        </div>
    </header>
  );
}
