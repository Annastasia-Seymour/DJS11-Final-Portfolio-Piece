import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
//import { fetchGenreData } from '../../components/DataFetch/api'; // Adjust the path as necessary

const genresList = [
    { id: 1, name: 'Personal Growth' },
    { id: 2, name: 'Investigative Journalism' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Comedy' },
    { id: 5, name: 'Entertainment' },
    { id: 6, name: 'Business' },
    { id: 7, name: 'Fiction' },
    { id: 8, name: 'News' },
    { id: 9, name: 'Kids and Family' },
  ];// to narrow whats in the id , also facilitating user interaction


const FetchFilter = () => {
  const [genre, setGenres] = useState([]);
  //const {genreId} = useParams();
  const [selectedGenreId, setSelectedGenreId] = useState(1); // testing purposes will default to History so that the select is available
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]); // To hold fetched show details
  //remember to add loading state and error state

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://podcast-api.netlify.app/genre/${selectedGenreId}`);
        if (!response.ok) throw new Error('Failed to fetch genres.');
        const data = await response.json();
        setGenres(data);

        // Fetch show details based on show IDs
        const showDetails = await Promise.all(
          data.shows.map(async (showId) => {
            const showResponse = await fetch(`https://podcast-api.netlify.app/id/${showId}`);
            if (!showResponse.ok) throw new Error(`Failed to fetch show with ID: ${showId}`);
            return showResponse.json();
          })
        );
        setShows(showDetails);
      } catch (err) {
        console.error('Error fetching genres:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getGenres();
  }, [selectedGenreId]);// Fetch genres whenever the selectedGenreId changes

  const handleGenreChange = (event) => {
    setSelectedGenreId(event.target.value)
  };

  if (loading) return <p>Loading genres...</p>
  if (error) return <p>Error fetching genres: apples {error}</p>

  return (
    
    <div className="filter-container">
    <div className="select-label">
      <h2>Selected Genre:</h2>
      <select value={selectedGenreId} onChange={handleGenreChange}>
        {genresList.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>

    {genre && (
      <div className="filter-display-details">
        <h3>Genre Details: {genre.title}</h3>
        <p>ID: {genre.id}</p>
        <p>Title: {genre.title}</p>
        <p>Description: {genre.description}</p>
        <h3>Shows in this Genre:</h3>

        <div className="shows-grid">
          {shows.map((show) => (
            <div key={show.id} className="show-item">
              <Link to={`/show/${show.id}`}>
              <img src={show.image} alt={show.title} className="show-image" />
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
};


export default FetchFilter;
//put the selctedGbere in a link to route in the urls
//put shows in image format