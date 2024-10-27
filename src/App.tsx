import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SchedulePage from './pages/Schedule';
import ContactPage from './pages/Contact';
import DJProfilesPage from './pages/DJProfiles';
import BlogPost from './pages/BlogPost';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/DJProfiles" element={<DJProfilesPage />} />
          <Route path="/blog" element={<Outlet />}>
            <Route path=":postID" element={<BlogPost />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
