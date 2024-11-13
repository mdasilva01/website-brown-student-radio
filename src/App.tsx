import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SchedulePage from './pages/Schedule';
import ContactPage from './pages/Contact';
import DJProfilesPage from './pages/DJProfiles';
import BlogPost from './pages/BlogPost';
// import BlogUpload from './pages/BlogUpload';

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
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

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
  },
  contentContainer: {
    flex: 1,  
  },
};

export default App;
