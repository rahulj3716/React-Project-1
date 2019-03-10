import React from 'react'
import './navbar.scss';
import img from '../logo.png';

export default function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar">
            <div className="nav-logo">
                <img src={img} alt="SORRY!!"/>
            </div>
            
                <ul className="navlinks">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">TOURS</a></li>

                </ul>
            
        </nav>
      
    </div>
  )
}
