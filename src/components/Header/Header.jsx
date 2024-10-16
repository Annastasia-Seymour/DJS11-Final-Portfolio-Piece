import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="navbar">
        {/* Add navigation links */}
        <Link className="logo-image" to= "/" >#DinoSaur</Link>
        <nav>
          
            <Link to="/showall"> Show All </Link>
            <Link to="/favourites"> Favorites </Link>
            <Link to="/browse"> Browse 🔍</Link> 
            <Link to="/showall"> Profile </Link>
        </nav>
      </header>

    )
  }