import React, { useEffect, useRef } from 'react';
import './Home.css';
import Player from '../components/Player';
import Shows from '../components/Shows';

const About = () => {
  return (
    <div id="home">
      <br />
      <h3>
        Click to listen to <span className="accent">101.1 FM LP-Providence</span>
      </h3>
      <h1>Brown Student & Community Radio</h1>
      <Player />
      <br />
      <Shows />
    </div>
  );
};

export default About;
