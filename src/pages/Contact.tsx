// updated designs from figma

import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.heading}>About</h1>
        <p style={styles.blurb}>
          “The Brown Network” began in 1936 as the first student-run radio
          station in the country. It was a carrier-current AM station
          broadcasting to Brown dorms. Eventually the station’s name was changed
          to “WBRU-AM.” In 1966, some of the station’s members secured a loan
          from the University and founded the radio station WBRU-FM (95.5),
          while others continued the student-oriented AM tradition. WBRU-FM
          became a commercial corporation, financially and legally separate from
          Brown University, while WBRU-AM continued to operate for the Brown
          community and surrounding areas in the college radio tradition. The AM
          signal in time became virtually inaudible. During the mid-1990s, a few
          students worked to find a new, more audible outlet for those still
          broadcasting in the older, experimental, student tradition. In 1997,
          WBRU-AM became “Brown Student Radio” (BSR) and started broadcasting on
          WELH-FM (88.1). WELH-FM, owned by the Wheeler School, was sold to
          another organization in 2010, leaving BSR to broadcast solely on
          bsrlive.com. In 2018, BSR obtained a low-power FM license. As WBRU-FM
          had sold their signal the year prior, BSR obtained the call signal
          WBRU-LP. BSR is now broadcasting on 101.1 FM, online, and through an
          upcoming mobile app.​​ Today, we are the only FM radio station on
          campus, staying true to our roots in traditional freeform college
          radio. Students, faculty, and community members all host cross-genre
          music shows, podcasts, and talk shows, allowing for a truly free
          creative outlet for the Providence community. We are officially
          partnered with PCR and AS220.
        </p>
      </div>

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
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "1366px",
    height: "auto",
    padding: "10px 0px",
    margin: "0 auto",
    textAlign: "center" as const,
    fontFamily: "Inter, sans-serif",
    color: "#000",
  },
  heading: {
    fontSize: "72px",
    fontWeight: 800,
    textAlign: "left" as const,
    paddingLeft: "73px",
    marginBottom: "20px",
    lineHeight: "87px",
  },
  blurb: {
    fontsize: "20px",
    weight: 400,
    lineHeight: "24.04px",
    fontFamily: "Inter, sans-serif",
    textAlign: "left" as const,
    paddingLeft: "73px",
    color: "#000",
  },
  contactBoxesContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 73px",
  },
  contactBox: {
    width: "360px",
    height: "430px",
    backgroundColor: "#D9D9D9",
    borderRadius: "16px",
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iframe: {
    borderRadius: "16px",
    width: "100%",
    height: "100%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    padding: "20px 0",
    marginTop: "20px",
    gap: "20px",
  },
  logoBox: {
    width: "80px",
    height: "80px",
    backgroundColor: "#C4C4C4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold" as const,
  },
  contactInfo: {
    textAlign: "left" as const,
    lineHeight: "1.5",
    color: "#000",
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
