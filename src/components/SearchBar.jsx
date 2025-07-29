import React from 'react'
import './components.css'

const SearchBar = () => (
    <div className="searchBar">
        <input
            type="text"
            placeholder="Search..."
            className="searchInput"
        />
        <img
            src={require('../img/search.png')}
            alt="Search"
            className="searchIcon"
        />
    </div>
)

export default SearchBar