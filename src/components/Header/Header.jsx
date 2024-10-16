import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="banner-container">
      <Link to="/home" >
      <div className="custom-logo">Dinosaur.</div>
      </Link>
           <div className="custom-navbar">
        <Link to="/home" >
           <button>Home</button>
        </Link>
         <Link to = "/show-all" >
           <button>Show all</button>
        </Link>
       <Link to ="/favorites">
          <button>Favorites</button>
       </Link>
       <Link to="/search">
        <button>Search</button>
       </Link>
                
      </div>
    </header>
  );
}
