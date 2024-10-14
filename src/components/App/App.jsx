import React from 'react';
import './App.css'; // Include your styles
import FetchData from '../DataFetch/FetchData.jsx';
import Header from '../Header/Header.jsx'

function App() {
  

  return (
   
    <div className="app-container">
    <div>
            <FetchData />
          
    </div>
    <button>Genre</button>
    <button>Show</button>

      
    </div>
  );
}

export default App;
