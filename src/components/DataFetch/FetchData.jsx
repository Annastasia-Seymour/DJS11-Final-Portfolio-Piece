import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //Add nav link to carousel window
import '../DataFetch/FetchData.css';
import { fetchPreviewData } from './api'; // Adjust the path as needed


 const FetchRandomPreview = ({setShows}) => {
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
  //random show will appear first if showall is clicked then the shows will appear on separate page alphabetical order
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {randomShows.map((podcast, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={podcast.id}>
            <Link to={`/show/${show.id}`}></Link>
            
            
            <img src={podcast.image} alt={podcast.title} className="d-block w-100" />
            <div className="details-container"> {/* Added details container */}
              <h5>{podcast.title}</h5>
              <p>Seasons: {podcast.seasons}</p>
              <p>
                Last Updated: {new Date(podcast.updated).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
 }  

 export default FetchRandomPreview;// note that this is in carousel format

