import React, { useEffect, useState } from 'react';
import { fetchShowById } from './api'; // Assuming you have a function to fetch a show by its ID
import { useParams } from 'react-router-dom';

const FetchFave = ({ showIds }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showId } = useParams(); // Retrieve showId from URL params
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    // Fetch favorite show details by their IDs
  
        const loadShowData = async () => {
            if (showId) {
              const data = await fetchShowById(showId);
              setShowData(data);
            }
          };
          loadShowData();
        }, [showId]);
      
        if (!showData) return <div>Loading...</div>;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your favorites</h1>
      <h1>{showData.name}</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((show) => (
            <li key={show.id}>
              <h2>{show.title}</h2>
              <img src={show.image} alt={show.title} width="150" />
              <p>{show.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FetchFave;
