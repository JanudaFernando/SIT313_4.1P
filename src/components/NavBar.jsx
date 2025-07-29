import React from 'react'
import './components.css'
import SearchBar from './SearchBar'

function NavBar() {
  return (
    <div className="navBar">
      <h1>DEV@DEAKIN</h1>
      <SearchBar />
      <h1>Post</h1>
      <h1>Login</h1>
    </div>
  )
}

export default NavBar
