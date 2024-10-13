import React from 'react';
import { FaSpotify, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CONTACT US</h1>
      <p style={styles.text}>Brown Student & Community Radio</p>
      <p style={styles.text}>Box #1934</p>
      <p style={styles.text}>Providence, Rhode Island 02912</p>
      <p style={styles.text}>
        Email: <a href="mailto:bsrlive2018@gmail.com" style={styles.email}>bsrlive2018@gmail.com</a>
      </p>
      
      <div style={styles.socialSection}>
        <h2 style={styles.subHeading}>follow us here to stay in the loop!</h2>
        <div style={styles.iconContainer}>
          <a href="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA&nd=1&dlsi=23f512681ed14c66" target="_blank" rel="noopener noreferrer" aria-label="Spotify" style={styles.iconLink}>
            <FaSpotify />
          </a>
          <a href="https://www.instagram.com/bsrlive/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={styles.iconLink}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/bsrlive/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={styles.iconLink}>
            <FaFacebook />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbsrlive" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={styles.iconLink}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center' as const,
    backgroundColor: '#F7F8F1',  
    fontFamily: "'Courier New', Courier, monospace", 
    color: '#6AB39E',  
    border: '2px solid #6AB39E',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '40px'
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    marginTop: '40px',
    color: '#6AB39E',
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#6AB39E',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  email: {
    color: '#6AB39E',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  socialSection: {
    marginTop: '30px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    fontSize: '36px',
  },
  iconLink: {
    color: '#6AB39E',
    textDecoration: 'none',
    transition: 'color 0.3s',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#F49E85',  
  },
  iconHover: {
    ':hover': {
      color: '#F49E85',  
    }
  },
};

export default About;
