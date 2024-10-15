import React from "react"

export default function Header() {
    return (
        <header className="navbar">
        {/* Add navigation links */}
        <nav>
           
           <div className='app-tabs'>
            <button> Home </button>
            <button> Categories </button>
            <button> My Podcasts </button>
            <button> Search 🔍</button> 
            <button> Profile </button>
            </div>
        </nav>
      </header>

    )
}