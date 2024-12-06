import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">

    <div className="navbar-left">
      <i className="fas fa-bars"></i>
    </div>

 
    <div className="navbar-search">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
    </div>

   
    <div className="navbar-right">
      <span className="link">Sign in</span>
      <i class="fa-regular fa-heart"></i>
      <i className="fas fa-gift"></i>
      
      <i className="fas fa-shopping-bag"></i>
    </div>
  </div>
  )
}

export default Navbar
