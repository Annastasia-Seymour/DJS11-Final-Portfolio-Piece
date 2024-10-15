import React from 'react';
import './App.css'; // Include your styles
import FetchAllData from '../DataFetch/FetchData.jsx'; // i have no idea how its still working 
import { fetchPreviewData } from '../DataFetch/api.js';
import FetchDataPreview from '../DataFetch/FetchData.jsx';

function App() {
  

  return (
   
    <div className="app-container">
    <div>
    
        <FetchDataPreview />
    </div>
    {/* <button>Filter <FetchGenre/> */}
    
    <button>Show</button>

      
    </div>
  );
}
//remember we want to make like a filter modal to pop up  when the genre is selected

export default App;
