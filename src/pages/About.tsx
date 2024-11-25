import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <iframe
          className="video"
          width="60%"
          height="auto"
          src="https://www.youtube.com/embed/8VFOA9Vc9Uc?si=7sOkeDA992gQiYqJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="blurb">
          “The Brown Network” began in 1936 as the first student-run radio
          station in the country. It was a carrier-current AM station
          broadcasting to Brown dorms. Eventually, the station’s name was
          changed to “WBRU-AM.” In 1966, some of the station’s members secured a
          loan from the University and founded the radio station WBRU-FM (95.5),
          while others continued the student-oriented AM tradition. WBRU-FM
          became a commercial corporation, financially and legally separate from
          Brown University, while WBRU-AM continued to operate for the Brown
          community and surrounding areas in the college radio tradition. The AM
          signal in time became virtually inaudible.
        </p>
      </div>
    </div>
  );
};

export default About;
