// updated designs from figma

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CONTACT US</h1>
      
      <div style={styles.contactBoxesContainer}>
        <div style={styles.contactBox}>
          <iframe
            src="https://www.instagram.com/bsrlive/embed"
            width="100%"
            height="100%"
            style={styles.iframe}
            title="Instagram Page"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div style={styles.contactBox}>
          <iframe
            // src="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA&nd=1&dlsi=ef683a8701c748e0"
            width="100%"
            height="100%"
            style={styles.iframe}
            title="Spotify Page"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div style={styles.contactBox}>
          <iframe
            // src="https://www.facebook.com/bsrlive/"
            width="100%"
            height="100%"
            style={styles.iframe}
            title="Facebook Page"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.logoBox}>LOGO</div>
        <div style={styles.contactInfo}>
          <p>bsrlive2018@gmail.com</p>
          <p>Brown Student & Community Radio (Box #1934)</p>
          <p>Providence, Rhode Island 02912</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: '1366px',
    height: 'auto',
    padding: '10px 0px',
    margin: '0 auto',
    textAlign: 'center' as const,
    fontFamily: 'Inter, sans-serif',
    color: '#000',
  },
  heading: {
    fontSize: '72px',
    fontWeight: 800,
    textAlign: 'left' as const,
    paddingLeft: '73px',
    marginBottom: '20px',
    lineHeight: '87px',
  },
  contactBoxesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 73px',
  },
  contactBox: {
    width: '360px',
    height: '430px',
    backgroundColor: '#D9D9D9',
    borderRadius: '16px',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iframe: {
    borderRadius: '16px',
    width: '100%',
    height: '100%',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    padding: '20px 0',
    marginTop: '20px',
    gap: '20px',
  },
  logoBox: {
    width: '80px',
    height: '80px',
    backgroundColor: '#C4C4C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold' as const,
  },
  contactInfo: {
    textAlign: 'left' as const,
    lineHeight: '1.5',
    color: '#000',
  },
};

export default Contact;

// prev designs draft

// const Contact: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Connect with Us</h1>

//       <div style={styles.iframeContainer}>
//         <iframe
//           src="https://www.instagram.com/bsrlive/embed"
//           width="400"
//           height="480"
//           allow="autoplay; encrypted-media"
//           title="Instagram Page"
//           style={styles.iframe}
//         ></iframe>
//       </div>

//       <div style={styles.linksContainer}>
//         <h2 style={styles.subHeading}>Get Involved</h2>
//         <p style={styles.text}>
//           <a href="#" style={styles.link}>Fill out our interest form here</a> (Coming Soon)
//         </p>
//         <p style={styles.text}>
//           <a href="#" style={styles.link}>Fill out our onboarding form here</a> (Coming Soon)
//         </p>
//       </div>
//     </div>
//   );
// };

// // styles


// // move to have 3 containers, rounded corners

// /*
// container with all 3 boxes:
// width: Fixed (1,366px)px;
// height: Hug (472px)px;
// top: 303px;
// left: 73px;
// padding: 10px 0px 0px 0px;
// gap: 10px;
// opacity: 0px;

// each box:
// width: 360px;
// height: 430px;
// gap: 0px;
// border-radius: 16px 0px 0px 0px;
// opacity: 0px;
// background color: #D9D9D9;

// */

// const styles = {
//   container: {
//     padding: '40px',
//     textAlign: 'center' as const,
//     backgroundColor: '#F7F8F1',
//     fontFamily: "'Courier New', Courier, monospace",
//     color: '#6AB39E',
//     maxWidth: '600px',
//     margin: 'auto',
//     marginTop: '40px',
//   },
//   heading: {
//     fontSize: '36px',
//     marginBottom: '20px',
//     color: '#6AB39E',
//   },
//   iframeContainer: {
//     marginBottom: '30px',
//   },
//   iframe: {
//     border: 'none',
//   },
//   linksContainer: {
//     marginTop: '20px',
//   },
//   subHeading: {
//     fontSize: '24px',
//     marginBottom: '10px',
//     color: '#6AB39E',
//   },
//   text: {
//     fontSize: '18px',
//     marginBottom: '10px',
//   },
//   link: {
//     color: '#6AB39E',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
// };

// /*

// font-family: Inter;
// font-size: 72px;
// font-weight: 800;
// line-height: 87.14px;
// text-align: left;

// */

// export default Contact;