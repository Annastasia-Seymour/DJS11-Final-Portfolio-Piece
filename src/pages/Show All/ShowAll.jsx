import React from "react";
import './ShowAll.css';
import { fetchShowData } from './api'; // Adjust the path as needed
import './ShowAll.css'; // Create a CSS file for styling

const ShowAllPreview = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllShows = async () => {
      try {
        const data = await fetchShowData(); // Fetch all shows
        setShows(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getAllShows();
  }, []);

  if (loading) return <p>Loading shows...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="show-all">
      <h1>All Shows</h1>
      <div className="shows-list">
        {shows.map(show => (
          <div key={show.id} className="show-item">
            <h2>{show.title}</h2>
            <p>Seasons: {show.seasons}</p>
            <p>Last Updated: {new Date(show.updated).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</p>
            {/* Optionally add a link to show details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllPreview;
