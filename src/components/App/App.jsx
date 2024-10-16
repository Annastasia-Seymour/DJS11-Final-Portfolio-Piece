import React from 'react';
import './App.css'; // Include your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Routes, Router , Route } from 'react-router-dom';
import FetchAllData from '../DataFetch/FetchData.jsx'; // i have no idea how its still working 

import FetchDataPreview from '../DataFetch/FetchData.jsx';

function App() {
  

  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<FetchDataPreview />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </Router>
    );
  }
  
//remember we want to make like a filter modal to pop up  when the genre is selected

export default App;
