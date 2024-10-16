import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../DataFetch/FetchData.css';
import { fetchPreviewData } from './api'; // Adjust the path as needed


 const FetchAllData = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  //const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPreviewData();
    
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
        setShows(sortedData);// appends to parent container
        setLoading(false);// stops loading state
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p className='loading-screen'>Loading, please wait a moment..</p>;
  if (error) return <p>Oh no , something went wrong. It seems to be ': {error}'</p>;

  //random show will appear first if showall is clicked then the shows will appear on separate page alphabetical order
  return (
    <div className="all-shows-container">
      <h1>All Shows</h1>
      <div className="shows-list">
        {shows.map((show) => (
          <div key={show.id} className="show-item">
            <Link to={`/show/${show.id}`}>
              <img src={show.image} alt={show.title} className="show-image" />
              <h2>{show.title}</h2>
              <p>Seasons: {show.seasons}</p>
              <p>Last Updated: {new Date(show.updated).toLocaleDateString('en-GB')}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAllData;//without carousel
 
