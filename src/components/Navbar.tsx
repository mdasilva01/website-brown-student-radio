import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="home-link">
          <Link to="/Schedule">
            <div className="left-text">NOW LIVE:</div>
            <div className="center-text">INSERT SHOW</div>
            <div className="right-text">INSERT DJ NAME</div>
          </Link>
        </li>

        <li className="home-link">
          <Link to="/">
            <div className="left-text">BLOG POSTS</div>
          </Link>
        </li>

        <li className="home-link">
          <Link to="/DJProfiles">
            <div className="left-text">DJ'S</div>
          </Link>
        </li>

        <li className="home-link">
          <Link to="/about">
            <div className="left-text">ABOUT</div>
          </Link>
        </li>

        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
