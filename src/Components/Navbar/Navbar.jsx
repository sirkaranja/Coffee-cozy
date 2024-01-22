import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <h3><span id='logo-c'>C</span>offee Cozy</h3>
    </div>
    <div className="nav-links">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#skills">Services</a></li>
        <li><a href="#services">Offers</a></li>
        <button>Contact</button>
      </ul>
    </div>
  </nav>
    
  )
}

export default Navbar