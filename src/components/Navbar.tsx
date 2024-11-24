import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const {hash, pathname, search} = useLocation();
  if (pathname.startsWith("/blog/") && pathname.length > 6) return null;
  return (
    <nav>
      <ul className="navbar">
      <li className="home-link">
          <Link to="/">
            <span className="left-text">NOW LIVE:</span>
            <span className="center-text">SHOW NAME</span>
            <span className="right-text">DJ NAME(S)</span>
          </Link>
        </li>
        <li className="home-link"><Link to="/blog">
          <span className="left-text">BLOG POSTS</span>
        </Link></li>
        <li className="home-link"><Link to="/DJProfiles">
          <span className="left-text">DJ'S</span>
        </Link></li>
        <li className="home-link"><Link to="/about">
          <span className="left-text">ABOUT</span>
        </Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
