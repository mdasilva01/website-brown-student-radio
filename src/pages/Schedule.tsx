import React, { useEffect, useState } from 'react';
import Player from '../components/Player'; // Import the Player component
import './Schedule.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Calendar from '../components/Calendar';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isLiveClicked, setIsLiveClicked] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate;


  const schedule = {
    Monday: [
      { show: 'Morning Jazz', dj: 'DJ Smooth', start: 8, end: 10 },
      { show: 'Rock Hour', dj: 'DJ Thunder', start: 15, end: 17 },
    ],
    Tuesday: [
      { show: 'Pop Hits', dj: 'DJ Spark', start: 10, end: 12 },
      { show: 'Indie Vibes', dj: 'DJ Chill', start: 20, end: 22 },
    ],
    // Add more days/shows here as needed
  };

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };


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
              {/* Time and Up Next Section */}
              <div className="under-bar-content">
                <div className="under-bar-time">{currentTime}</div>
                <div className="under-bar-cp">CURRENTLY PLAYING: Isn't She Lovely</div>
                <div className="under-bar-un">UP NEXT: The Mix (8-9 PM)</div>
              </div>

              {/* Player Section */}
              <div className="player-container">
                <Player />
                <div className="spinitron-js-widget-container widget">
                  Isn't She Lovely <br />
                  Stevie Wonder <br />
                  Songs in the Key of Life, 1976
                </div>
                <div className="spinitron-js-widget-container other-widget">
                  The Mix <br />
                  Matt DaSilva <br />
                  8-9 PM
                </div>
              </div>

              {/* Button to toggle the calendar view */}
              <button className="toggle-button" onClick={toggleView}>
                {showCalendar ? 'Back to Now Playing' : 'View Full Schedule'}
              </button>

              {/* Sliding Calendar Content */}
              <div className={`sliding-content ${showCalendar ? 'show' : ''}`}>
                {showCalendar && (
                  <div className="schedule">
                    <button className="back-button" onClick={toggleView}>
                      &#8592; Back
                    </button>
                    <h2>Full Schedule</h2>
                    <Calendar schedule={schedule} />
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;