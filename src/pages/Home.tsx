import React, { useEffect, useRef } from 'react';
import './Home.css';
import Player from '../components/Player';
import Shows from '../components/Shows';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div id="home">
      <h3>
        Click to listen to <span className="accent">101.1 FM LP-Providence</span>
      </h3>
      <h1>Brown Student & Community Radio</h1>
      <Player />
      <br />
      <Shows />
      <br />
      <h2 className="home-text">Latest posts</h2>
      <BlogPreview />
    </div>
  );
};

export default Home;
