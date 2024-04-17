import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ContactUs from './ContactUs';
import logo from '../img/Logo5.png';

function Navbar() {
  useEffect(() => {
    const timer = setInterval(() => {
      // setAnimate(prev => !prev);
    }, 15000); // change class every 15 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt='Icon' className="navbar-icon animated-logo " />
          <div>
            <span className="animated-logo">F</span>
            <span className="animated-logo">o</span>
            <span className="animated-logo">r</span>
            <span className="animated-logo">e</span>
            <span className="animated-logo">c</span>
            <span className="animated-logo">a</span>
            <span className="animated-logo">S</span>
            <span className="animated-logo">t</span>
            <span className="animated-logo">o</span>
            <span className="animated-logo">r</span>
            <span className="animated-logo">y</span>
          </div>
          <i className="fab fa-typo3"></i>
      </Link>
        <div className='menu-icons'>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/predict" className="navbar-item">Predict Forecast</Link>
          <Link to="/sales-dashboard" className="navbar-item">Sales Dashboard</Link>
          <ContactUs />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;