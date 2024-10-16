import React from 'react';
import './App.css'; // Include your styles
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter ,Routes, Router , Route } from 'react-router-dom';
//import data from '../DataFetch/FetchData.jsx'; // i have no idea how its still working 
//import Header from '../Header/Header.jsx';
import LandingPage from '../../pages/LandingPage/landingPage.jsx';

//remember we want to make like a filter modal to pop up  when the genre is selected

// App.jsx

function App() {
  return (
    <LandingPage />
    
  );
}

export default App;

