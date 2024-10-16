import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../DataFetch/FetchData.css';
import { fetchPreviewData , fetchShowData} from './api'; // Adjust the path as needed


 const FetchDataPreview = () => {
  const [previewData, setPreviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPreviewData();
        // Sort data alphabetically by title
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
        setPreviewData(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p className='loading-screen'>Loading, please wait a moment..</p>;
  if (error) return <p>Oh no , something went wrong. It seems to be ': {error}'</p>;

  return (
    <div>
      <h1 className='podcast-title-name'>Podcast Titles</h1>
      
        <div className="title-container">
          {previewData.map((podcast, index) => (
            <div key={index} className="title-block">
              <Link to={`/show/${podcast.id}`}>
              <img src={podcast.image} alt={podcast.title} className="podcast-image" />
              </Link>
              
              <h2>{podcast.title}</h2>
              <p>Seasons: {podcast.seasons} </p>
               <p>Last Updated: {new Date(podcast.updated).toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
                })}</p>
            </div>
          ))}
        </div>
      </div>
    
  );
};

 export default FetchDataPreview;
