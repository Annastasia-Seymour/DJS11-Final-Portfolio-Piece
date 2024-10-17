import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { fetchGenreData } from '../../components/DataFetch/api'; // Adjust the path as necessary

const FetchFilter = () => {
  const [genres, setGenres] = useState([]);
  //const {genreId} = useParams();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredShows, setFilteredShows] = useState([]);
  //remember to add loading state and error state

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

  const handleApplyFilter = async () => {
    if (selectedGenre) { 
        try{ 
            // Fetch shows based on selected genre
            const shows = await FetchFilter(selectedGenre);
            setFilteredShows(shows);
        }
        catch(err){
            console.error("Error fetching genre: ",err)
        }
      
    }
  };

  return (
    <div>
      <h1>Search Shows</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
        <option value="">Select a Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      <button onClick={handleApplyFilter}>Filter Shows</button>

      <h2>Filtered Shows</h2>
      {filteredShows.length > 0 ? (
        <ul>
          {filteredShows.map((show) => (
            <li key={show.id}>{show.title}</li>
          ))}
        </ul>
      ) : (
        <p>No shows found for this genre.</p>
      )}
    </div>
  );
};

export default FetchFilter;
