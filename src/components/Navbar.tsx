import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          <Link to="/BlogPost">
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
          className={`home-link about-section ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <Link to="/about">
            <div className="left-text">ABOUT</div>
          </Link>
          <div className="social-icons">
            <a
              href="https://twitter.com/bsrlive"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/bsrlive/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaSpotify size={20} />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
