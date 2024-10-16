import React from "react";
import './Footer.css'
export default function Footer (){

    return (
        <footer className="audio-player">
        {/* Sticky player controls */}
        <p>Now Playing: Podcast Name</p>
        <button>Play/Pause</button>
        <button>Next</button>
      </footer>
    );

}

