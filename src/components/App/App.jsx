import React from 'react';
import './App.css'; // Include your styles
import FetchAllData from '../DataFetch/FetchData.jsx';
import Header from '../Header/Header.jsx'

function App() {
  

  return (
   
    <div className="app-container">
    <div>
            <FetchAllData />
          
    </div>
    <button>Genre dropdown would be cool </button>
    <button>Show</button>

      
    </div>
  );
}

export default App;
