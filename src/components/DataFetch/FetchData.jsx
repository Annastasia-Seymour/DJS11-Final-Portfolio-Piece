import React , {useEffect , useState } from 'react';
import '../DataFetch/FetchData.css';


function FetchAllData(){

    const [podcasts , setPodcasts] = useState([]);

     useEffect (() => {
        fetch ('https://podcast-api.netlify.app/')
        .then(response => {
            if(!response.ok){
                throw new Error('Network shows 404');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);// handles the data received
            const defaultPodcasts = data.sort((a,b) =>
            a.title.localeCompare(b.title));
               setPodcasts (defaultPodcasts);
        })
        .catch(error =>{
            console.error('Oh no fetching the api!', error);
        });
    

     }, []);
        
     return (
        <div>
            <h1 className='podcast-title-name'>Podcast Titles make show all , Genre</h1>
            <div className="title-container">
                {podcasts.map((podcast, index) => (
                    <div key={index} className="title-block" >
                        <img src={podcast.image} alt={podcast.title} className="podcast-image" />
                        <h2>{podcast.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchAllData;
