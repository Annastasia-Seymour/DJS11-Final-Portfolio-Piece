import React, { useEffect, useState } from 'react';
import FetchFave from '../../components/DataFetch/FetchFave';

function FavoritesPage() {
  const [showIds, setShowIds] = useState([]);

  useEffect(() => {
    // Retrieve favorite show IDs from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setShowIds(savedFavorites);
  }, []);

  return (
    <div>
      <h1>I am your Favorites</h1>
      <FetchFave showIds={showIds} />
    </div>
  );
}

export default FavoritesPage;
