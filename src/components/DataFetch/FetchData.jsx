import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../DataFetch/FetchData.css';
import { fetchPreviewData , fetchShowData} from './api'; // Adjust the path as needed


 const FetchDataPreview = ({setShows}) => {
  const [previewData, setPreviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  //const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPreviewData();
        // Sort data alphabetically by title
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
       // const firstTenShows = sortedData.slice(0,10); // gets the first 10
        setPreviewData(sortedData);// appends to parent container
        setLoading(false);// stops loading state
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getData();
  }, [setShows]);


  const getRandomShows = (data, count) => {
    // Shuffle the array
    const shuffled = data.sort(() => 0.5 - Math.random());
    // Select the first 'count' elements from the shuffled array
    return shuffled.slice(0, count);
  };

  if (loading) return <p className='loading-screen'>Loading, please wait a moment..</p>;
  if (error) return <p>Oh no , something went wrong. It seems to be ': {error}'</p>;

  const randomShows = getRandomShows(previewData , 8)// specifies where to get the data and how many
  return (
    <div className='random-podcast-container'>
      <h1 className='podcast-title-name'>~Trending right now~</h1>
      
        <div className="title-container">
          {randomShows.map((podcast, index) => (
            <div key={index} className="title-block">
            
              <img src={podcast.image} alt={podcast.title} className="podcast-image" />
              
              
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
