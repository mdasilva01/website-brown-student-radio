import React from 'react';
import { FaSpotify, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <p>ABOUT</p>
        {/* <p>Box #1934</p>
        <p>Providence, Rhode Island 02912</p>
        <p>Email: <a href="mailto:bsrlive2018@gmail.com" style={styles.email}>bsrlive2018@gmail.com</a></p> */}
      </div>
      <div style={styles.rightSection}>
      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbsrlive" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={styles.iconLink}>
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/bsrlive/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={styles.iconLink}>
          <FaInstagram />
        </a>
        <a href="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA&nd=1&dlsi=23f512681ed14c66" target="_blank" rel="noopener noreferrer" aria-label="Spotify" style={styles.iconLink}>
          <FaSpotify />
        </a>
        {/* <a href="https://www.facebook.com/bsrlive/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={styles.iconLink}>
          <FaFacebook />
        </a> */}
      </div>
    </footer>
  );
};

// styles

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    fontFamily: "'Courier New', Courier, monospace",
    color: '#000000',
    borderTop: '2px solid #FF7083',
  },
  leftSection: {
    flex: 1,
    textAlign: 'left' as const,
    fontSize: '14px',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    fontSize: '24px',
  },
  email: {
    color: '#000000',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  iconLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '15px',
    borderRadius: '50%',  
    backgroundColor: '#F49E85',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',  
    height: '50px',
  },
};

export default Footer;
