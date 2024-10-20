import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="home-text">Brown Student & Community Radio</h1>
      <body>Radio for the Curious Listener</body>
      <h1 className="home-text">Latest Posts</h1>
      <div className="blog-content">
        <div className="blog-post">
          <body className="blog-title">10/13/2024 Site Launched!</body>
          <body className="blog-author">by Christina Paxson</body>
          <body className="blog-text">Hello! This is a sample blog post.</body>
          <body className="blog-comments">Comments (0)</body>
        </div>
        <div className="blog-post">
          <body className="blog-title">10/11/2024 Poll Results</body>
          <body className="blog-author">by Dean Zia</body>
          <body className="blog-text">Hello lovely BSR listeners</body>
          <body className="blog-comments">Comments (1)</body>
          <body className="blog-comments">Christina Paxson: Hi Dean Zia! </body>
        </div>
      </div>
    </div>
  );
};

export default Home;
