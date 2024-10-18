
 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowData } from './api'; // Fetch function for show details

const ShowDetails = () => {
  const { id } = useParams(); // Gets the show ID from the URL
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null); // Track selected season

  useEffect(() => {
    const getShowDetails = async () => {
        try {
            const data = await fetchShowData(id); // Fetch the show data using the ID
            setShow(data);
            if (data.seasons && data.seasons.length > 0) {
              setSelectedSeason(data.seasons[0].season); // Default to first season
            }
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    getShowDetails(id);
  }, [id]);

  if (loading) return <p>Loading show details...</p>;
  if (error) return <p>Error loading show details: {error}</p>;

    // Handle dropdown selection
    const handleSeasonChange = (e) => {
        setSelectedSeason(parseInt(e.target.value)); // Convert value to int
      };

      return (
        <div className="show-details">
          <h1>{show.title}</h1>
          <p>{show.description}</p>
    
          {/* Dropdown for selecting seasons */}
          <div className='season-episode-container'>
          <div className="season-dropdown">
            <label htmlFor="season-select"><strong>Select a Season: </strong> </label>
            <select
              id="season-select"
              value={selectedSeason}
              onChange={handleSeasonChange}
            >
              {show.seasons.map((season) => (
                <option key={season.season} value={season.season}>
                  {season.title}
                </option>
              ))}
            </select>
          </div>
          <div className='season-episodes'>
              <h5>Episodes:  </h5>
          </div>

          </div>
          {/* Display episodes for the selected season */}
          <div className="episodes-container">
            {show.seasons
              .filter((season) => season.season === selectedSeason) // Show only selected season's episodes
              .map((season) => (
                <div key={season.season}>
                  <h2>{season.title}</h2>
                  <div className="season-image">
                      <img src={season.image} alt={season.title}  />
                  </div>
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
              ))}
          </div>
        </div>
      );
    };

export default ShowDetails;

 