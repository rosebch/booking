import React from 'react';

import Header from '../header/Header';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <span className="logo">booking</span>
            <div className="navbar__items">
                <button className="navbar__button">Register</button>
                <button className="navbar__button">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar