import React from "react";
import './Header.css';

export default function Header() {
  return (
    <header className="banner-container">
      <div className="custom-logo">Logo</div>
      <div className="custom-navbar">
        <button>Home</button>
        <button>Show all</button>
        <button>Favourites</button>
        <button>Search</button>
      </div>
    </header>
  );
}
