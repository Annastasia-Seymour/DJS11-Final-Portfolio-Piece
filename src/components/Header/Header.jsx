import React from "react"

export default function Header() {
    return (
        <header className="navbar">
        {/* Add navigation links */}
        <nav>
            <h1>I live here in your head</h1>
           <div className='app-tabs'>
            <h3> Home </h3>
            <h3> Categories </h3>
            <h3> My Podcasts </h3>
            <h3> Search 🔍</h3> 
            <h3> Profile </h3>
            </div>
        </nav>
      </header>

    )
}