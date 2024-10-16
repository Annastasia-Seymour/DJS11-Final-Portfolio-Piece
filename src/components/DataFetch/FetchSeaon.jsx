import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowData } from './api'; // Assuming you have this function in api.js

const ShowDetails = () => {
  const { id } = useParams(); // Gets the show ID from the URL
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShowDetails = async () => {
      try {
        const data = await fetchShowData(id); // Fetch the show data using the ID
        setShow(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getShowDetails();
  }, [id]);

  if (loading) return <p>Loading show details...</p>;
  if (error) return <p>Error loading show details: {error}</p>;

  return (
    <div className="show-details">
      <h1>{show.title}</h1>
      <p>{show.description}</p>

      <div className="seasons">
        {show.seasons.map((season) => (
          <div key={season.season} className="season">
            <h2>{season.title}</h2>
            <img src={season.image} alt={season.title} className="season-image" />

            <div className="episodes">
              {season.episodes.map((episode) => (
                <div key={episode.episode} className="episode">
                  <h3>Episode {episode.episode}: {episode.title}</h3>
                  <p>{episode.description}</p>
                  <audio controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDetails;
