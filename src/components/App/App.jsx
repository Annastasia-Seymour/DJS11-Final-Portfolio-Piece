import React from 'react';
import './App.css'; // Include your styles
import FetchAllData from '../DataFetch/FetchData.jsx';
import FetchGenre from '../DataFetch/FetchGenre.jsx';
import Header from '../Header/Header.jsx'

function App() {
  

  return (
   
    <div className="app-container">
    <div>
    
        <FetchAllData />
    </div>
    <div> <FetchGenre/>
     </div>
    <button>Show</button>

      
    </div>
  );
}

export default App;
