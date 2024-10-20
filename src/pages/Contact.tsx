import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Connect with Us</h1>

      <div style={styles.iframeContainer}>
        <iframe
          src="https://www.instagram.com/bsrlive/embed"
          width="400"
          height="480"
          // frameBorder="0"
          allow="autoplay; encrypted-media"
          title="Instagram Page"
          style={styles.iframe}
        ></iframe>
      </div>

      <div style={styles.linksContainer}>
        <h2 style={styles.subHeading}>Get Involved</h2>
        <p style={styles.text}>
          <a href="#" style={styles.link}>Fill out our interest form here</a> (Coming Soon)
        </p>
        <p style={styles.text}>
          <a href="#" style={styles.link}>Fill out our onboarding form here</a> (Coming Soon)
        </p>
      </div>
    </div>
  );
};

// styles

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center' as const,
    backgroundColor: '#F7F8F1',
    fontFamily: "'Courier New', Courier, monospace",
    color: '#6AB39E',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '40px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#6AB39E',
  },
  iframeContainer: {
    marginBottom: '30px',
  },
  iframe: {
    border: 'none',
  },
  linksContainer: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#6AB39E',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  link: {
    color: '#6AB39E',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Contact;
