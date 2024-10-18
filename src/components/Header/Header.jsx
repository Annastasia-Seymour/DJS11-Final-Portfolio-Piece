import React from "react"; // Import useState
import './Header.css';
import { Link } from "react-router-dom";
import { useTheme } from "../Theme/ThemeContext";


export default function Header() {
  const {theme} = useTheme();
 
  return (
    <div className="everything-container">
<header className={`banner-container${theme}`}>
      <Link to="/">
        <div className="custom-logo">Dinosaur.</div>
      </Link>
      <div className="custom-navbar">
        <Link to="/home">
          <button className={`button${theme}`}>Home</button>
        </Link>
        <Link to="/show-all">
          <button className={`button${theme}`}>Show all</button>
        </Link>
        <Link to="/favorites">
          <button className={`button${theme}`}>Favorites</button>
        </Link >
        <Link to="/filter">
        <button className={`button${theme}`}>Filter By Genre</button>        
        </Link>
        </div>
        </header>
    </div>
    
   
  );
}
