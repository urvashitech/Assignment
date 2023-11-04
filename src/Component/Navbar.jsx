import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="bg"></div>
      <div className="font">
        <span className="col-yellow">Browse</span>
        <span>Buy</span>
      </div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" role="button" aria-expanded="false">
                Category
              </Link>
              <ul
                className="dropdown-menu"
                style={{ background: 'black', color: 'white', fontSize: '10px' }}
              >
                <li>
                  <Link to="/cloths" style={{ fontSize: '20px' }}>
                    Cloth
                  </Link>
                </li>
                <li>
                  <Link to="/electronics" style={{ fontSize: '20px' }}>
                    Electronic
                  </Link>
                </li>
                <li>
                  <Link to="/jewelry" style={{ fontSize: '20px' }}>
                    Jewelry
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
