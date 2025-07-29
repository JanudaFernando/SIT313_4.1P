import React from 'react'

function NavBar() {
  return (
    <div>
      <h1>DEV@DEAKIN</h1>
      <img src={require('../img/search.png')} alt="Search" /> 
      <h3>Search...</h3>   
      <h1>Post</h1>
      <h1>Login</h1>
      </div>
  )
}

export default NavBar
