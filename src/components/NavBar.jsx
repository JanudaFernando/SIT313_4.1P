import React from 'react'
import './components.css'
import SearchBar from './SearchBar'

function NavBar() {
  return (
    <nav className="navBar">
      {/* Logo/Brand */}
      <div className="navBrand">
        <h1>DEV@DEAKIN</h1>
      </div>

      {/* Center - Search Bar */}
      <div className="navCenter">
        <SearchBar />
      </div>

      {/* Right Side Navigation */}
      <div className="navLinks">
        <button className="navButton">Post</button>
        <button className="navButton navButtonPrimary">Login</button>
      </div>
    </nav>
  )
}

export default NavBar
