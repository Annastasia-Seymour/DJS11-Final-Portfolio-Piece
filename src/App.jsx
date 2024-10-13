import React from 'react';
import './App.css'; // Include your styles

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        {/* Add navigation links */}
        <nav>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>My Podcasts</li>
            <li>Search</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <div className="hero-section">
          {/* Featured podcast */}
          <h1>Featured Podcast</h1>
        </div>

        <div className="podcast-rows">
          {/* Categories or rows of podcasts */}
          <h2>Trending Podcasts</h2>
          <div className="podcast-row">
            {/* Map through podcast items */}
            <div className="podcast-card">Podcast 1</div>
            <div className="podcast-card">Podcast 2</div>
            {/* Repeat */}
          </div>

          <h2>New Releases</h2>
          <div className="podcast-row">
            {/* More podcast cards */}
            <div className="podcast-card">Podcast A</div>
            <div className="podcast-card">Podcast B</div>
            {/* Repeat */}
          </div>
        </div>
      </div>

      <footer className="audio-player">
        {/* Sticky player controls */}
        <p>Now Playing: Podcast Name</p>
        <button>Play/Pause</button>
        <button>Next</button>
      </footer>
    </div>
  );
}

export default App;
