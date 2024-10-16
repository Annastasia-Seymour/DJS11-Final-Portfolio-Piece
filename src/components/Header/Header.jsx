import React from "react"

export default function Header() {
    return (
        <header className="navbar">
        {/* Add navigation links */}
        <nav>
           <h1>I live in your head</h1>
           <div className='app-tabs'>
            <button> Home </button>
            <button> Show All </button>
            <button> Favorites </button>
            <button> Browse 🔍</button> 
            <button> Profile </button>
            </div>
        </nav>
      </header>

    )
}