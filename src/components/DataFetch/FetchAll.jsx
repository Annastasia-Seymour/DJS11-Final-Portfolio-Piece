import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import '../DataFetch/FetchData.css';
import { fetchPreviewData } from './api'; // Adjust the path as needed


 const FetchAllData = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAscending , setIsAscending] = useState(true);
  const [isOldestFirst, setIsOldestFirst] = useState(true); // To track update date sort order
 
  //const navigate = useNavigate();

  useEffect(() => {
    const getShows = async () => {
      try {
        const data = await fetchPreviewData();
        setShows(data);// appends to parent container
        setLoading(false);// stops loading state
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getShows();
  }, []);

 
const handleSortAlphabet = () =>{
  const sortedShows = [...shows].sort((a,b) => {
    if (isAscending){
      return a.title.localeCompare(b.title);
    }else {
      return b.title.localeCompare(a.title);
    }
  });
  setShows(sortedShows);
  setIsAscending(!isAscending);//toggles the sorting order
}

const handleSortByUpdate = () => {
  const sortedShows = [...shows].sort((a, b) => {
    // Assuming the shows have a 'lastUpdated' field in ISO date format
    const dateA = new Date(a.lastUpdated);
    const dateB = new Date(b.lastUpdated);
    return isOldestFirst ? dateA - dateB : dateB - dateA; // Sort by date, either oldest first or newest first
  });
  setShows(sortedShows);
  setIsOldestFirst(!isOldestFirst); // Toggle sorting order for update date
};

if (loading) return <p className='loading-screen'>Loading, please wait a moment..</p>;
if (error) return <p>Oh no , something went wrong. It seems to be ': {error}'</p>;


  //random show will appear first if showall is clicked then the shows will appear on separate page alphabetical order
  return (
    <div className="all-shows-container">
      <h1>Total Shows: {shows.length}</h1>
      <div className='button-sort-container'>
          <button onClick={handleSortAlphabet} className='alphabet-sort'>
             Sort Shows {isAscending ? 'A-Z' : 'Z-A'}
          </button>
          <button onClick={handleSortByUpdate} className='update-sort'>
              Sort Shows by {isOldestFirst ? 'Oldest' : 'Most Recent'} Update
          </button>
      </div>
     
      <div className="shows-list">
        {shows.map((show) => (
          <div key={show.id} className="show-item">
            <Link to={`/show/${show.id}`}>
              <img src={show.image} alt={show.title} className="show-image" />
              <h2>{show.title}</h2>
              <p>Seasons: {show.seasons}</p>
              <p>
                Last Updated: {new Date(show.updated).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                 })}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAllData;//without carousel
 
