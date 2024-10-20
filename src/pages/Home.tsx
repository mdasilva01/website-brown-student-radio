import React, { useEffect, useRef } from 'react';
import './Home.css';
import Player from '../components/Player';

const About = () => {
  return (
    <div id="home">
      <h3>
        Click to listen to <span className="accent">101.1 FM LP-Providence</span>
      </h3>
      <h1>Brown Student & Community Radio</h1>
      <Player />
    </div>
  );
};

export default About;
