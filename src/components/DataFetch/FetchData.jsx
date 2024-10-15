import React , {useEffect , useState } from 'react';
import '../DataFetch/FetchData.css';


 import { fetchPreviewData } from './api'; // Adjust the path as needed

const FetchDataPreview = () => {
  const [previewData, setPreviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPreviewData();
        setPreviewData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1 className='podcast-title-name'>Podcast Titles make show all , Genre</h1>
        <div className="title-container">
            {previewData.map((podcast, index) => (
                <div key={index} className="title-block" >
                    <img src={podcast.image} alt={podcast.title} className="podcast-image" />
                    <h2>{podcast.title}</h2>
                </div>
            ))}
        </div>
    </div>
);
}

export default FetchDataPreview;