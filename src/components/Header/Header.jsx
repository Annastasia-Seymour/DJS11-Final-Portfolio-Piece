import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="banner-container">
      <div className="custom-logo">Logo</div>
      <div className="custom-navbar">
        <Link to="/home" >
           <button>Home</button>
        </Link>
         <Link to = "/show-all" >
           <button>Show all</button>
        </Link>
       
        <button>Favourites</button>
        <button>Search</button>
      </div>
    </header>
  );
}
