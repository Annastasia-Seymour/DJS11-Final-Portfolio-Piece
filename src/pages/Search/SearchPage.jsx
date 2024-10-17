import React, { useState } from 'react';
import SearchModal from './SearchModal';
import FetchFilter from './FetchFilter';

function Search () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [genreId, setGenreId] = useState(null);

  const handleApplyFilter = (selectedGenreId) => {
    setGenreId(selectedGenreId); // Set the genreId based on user's selection
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Search</button>
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
      {genreId && <FetchFilter genreId={genreId} />}
    </div>
  );
};

export default Search;// this is he search page

