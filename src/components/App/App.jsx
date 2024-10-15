import React from 'react';
import './App.css'; // Include your styles
import FetchAllData from '../DataFetch/FetchData.jsx';
import { fetchPreviewData } from '../DataFetch/api.js';

function App() {
  

  return (
   
    <div className="app-container">
    <div>
    
        <FetchAllData />
    </div>
    {/* <button>Filter <FetchGenre/> */}
    
    <button>Show</button>

      
    </div>
  );
}
//remember we want to make like a filter modal to pop up  when the genre is selected

export default App;
