import React, { useState, useEffect } from 'react';
import FetchFilter from '../../components/DataFetch/FetchFilter';
import { fetchGenreData } from '../../components/DataFetch/api'; // Adjust the path as needed

function SearchPage() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenreData(); // Assuming this fetches an array of genres
        setGenres(data);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };
    getGenres();
  }, []);

  const handleFilterApply = (e) => {
    e.preventDefault();
    // If you're using genre ID, use setSelectedGenre here
    setSelectedGenre(e.target.genre.value);
  };

  return (
    <div>
      <h1>Search Shows</h1>
      <form onSubmit={handleFilterApply}>
        <select name="genre">
          <option value="">Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <button type="submit">Apply Filter</button>
      </form>
      {selectedGenre && <FetchFilter genreId={selectedGenre} />}
    </div>
  );
}

export default SearchPage;

