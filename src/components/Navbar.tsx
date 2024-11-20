import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar: React.FC = () => {
  // State to track the active navbar item
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handle click to set the active item
  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <nav>
      <ul className="navbar">
        <li
          className={`home-link ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/Schedule">
            <div className="left-text">NOW LIVE:</div>
            <div className="center-text">INSERT SHOW</div>
            <div className="right-text">INSERT DJ NAME</div>
          </Link>
        </li>

        <li
          className={`home-link ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/">
            <div className="left-text">BLOG POSTS</div>
          </Link>
        </li>

        <li
          className={`home-link ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/DJProfiles">
            <div className="left-text">DJ'S</div>
          </Link>
        </li>

        <li
          className={`home-link ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <Link to="/about">
            <div className="left-text">ABOUT</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
