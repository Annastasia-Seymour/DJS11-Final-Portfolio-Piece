import React, { useState, useEffect } from 'react';
import { fetchGenreData } from './api'; // Assuming you have this in your api.js file

const SearchModal = ({ isOpen, onClose, onApplyFilter }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenreData();
        setGenres(data);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };
    getGenres();
  }, []);

  const handleFilterApply = () => {
    onApplyFilter(selectedGenre);
    onClose(); // Close the modal after applying the filter
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Filter Shows by Genre</h2>
        <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
          <option value="">Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <button onClick={handleFilterApply}>Apply Filter</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SearchModal;
