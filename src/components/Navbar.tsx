import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSpotify, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Navbar.css";
import "../fonts/univers-lt-std-webfont/univers-font.css";
import DJSchedule from "./DjSchedule"; // Import ShowSchedule component

const Navbar: React.FC = () => {
  const [currentShow, setCurrentShow] = useState<string>("Loading...");
  const [currentDJ, setCurrentDJ] = useState<string>("Loading...");

  const handleCurrentShowChange = (show: any) => {
    if (show) {
      setCurrentShow(show.showTitle || "No Current Show");
      setCurrentDJ(show.name || "No DJ Available");
    } else {
      setCurrentShow("No Current Show");
      setCurrentDJ("No DJ Available");
    }
  };

  const location = useLocation();
  if (location.pathname.startsWith("/blog") && location.pathname.length >= 7) return null;

  return (
    <>
      <DJSchedule onCurrentShowChange={handleCurrentShowChange} />
      <nav>
        <ul className="navbar">
          <li className="home-link">
            <Link to="/Schedule">
              <div className="left-text">NOW LIVE:</div>
              <div className="center-text">{currentShow}</div>
              <div className="right-text">{currentDJ}</div>
            </Link>
          </li>
          <li className="home-link">
            <Link to="/blog">BLOG POSTS</Link>
          </li>
          <li className="home-link">
            <Link to="/DJProfiles">DJ'S</Link>
          </li>
          <li className="home-link about-section">
            <Link to="/about">ABOUT</Link>
            <div className="social-icons">
              <a href="https://twitter.com/bsrlive" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/bsrlive/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify size={20} />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
