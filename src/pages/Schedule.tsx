import React, { useEffect, useState } from 'react';
import Player from '../components/Player'; // Import the Player component
import './Schedule.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isLiveClicked, setIsLiveClicked] = useState<boolean>(false);

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      // format the time to HH:MM without seconds and no space before AM/PM
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/ /g, '');
      setCurrentTime(formattedTime);
    };

    // update the time every minute
    updateTime(); 
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval); // cleanup the interval on component unmount
  }, []);

  const handleNowLiveClick = () => {
    setIsLiveClicked(true); // Hide "NOW LIVE" bar and show the DJ name
  };

  useEffect(() => {
    // spinitron widget script existing
    const script = document.createElement('script');
    script.src = 'https://widgets.spinitron.com/static/js/widget.js'; // Spinitron widget URL
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency means this effect runs only once after the component mounts

  return (
    <>
      <div>
      <div className="home-button">
        <a href="/" title="Go Home">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
      </div>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
            <div className="schedule-page">
              {/* Only show "NOW LIVE" bar if not clicked */}
              {/* {!isLiveClicked && (
                <header className="schedule-header" onClick={handleNowLiveClick}>
                  <span className="header-left">NOW LIVE</span>
                  <span className="header-center">THERE'S SOMETHING IN YOUR EAR</span>
                  <span className="header-right">
                    <div> XANDI PINK </div>
                    ALLIE HEFNER
                  </span>
                </header>
              )}

              */}

              {/* The header-divider and other content will stay visible once clicked
              <hr className="header-divider" /> */}

              {/* Section displaying time and Kaikai */}
              <div className="under-bar-content">
                <div className="under-bar-time">{currentTime}</div>
                <div className="under-bar-cp">CURRENTLY PLAYING: </div>
                <div className="under-bar-un">UP NEXT: </div>
              </div>
              
              {/* Add the Player component here under the time */}
<div className="player-container">
  <Player /> 
  <div className="spinitron-js-widget-container widget"> 
  {/* <iframe width ="430" src="//widgets.spinitron.com/widget/now-playing-v2?station=WBRU&num=1&sharing=1&cover=0&player=0" allow="encrypted-media"></iframe> */}
  ISNT SHE LOVELY <br /> 
  STEVIE WONDER<br />
  Songs in The Key of Life, 1976
  </div>

  <div className="spinitron-js-widget-container other-widget">
  {/* <iframe width="400" src="https://widgets.spinitron.com/widget/upcoming-shows?station=wbru&count=1&current=1&sharing=1&description=1"></iframe> */}
  THE MIX <br /> 
  MATT DESILVA<br />
  8-9pm            
                </div> 
</div>
              </div>
              
              {/* Spinitron widget */}
              
          </main>
          
          <div className="mdl-card__actions">
              <a href="https://programs.testradio.org/WBRU/calendar?layout=1" className="mdl-button">FULL SCHEDULE</a>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
