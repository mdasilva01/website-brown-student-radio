import React, { useEffect, useState } from 'react';
import Player from '../components/Player'; // Import the Player component
import './Schedule.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import DJSchedule from "../components/DjSchedule"; // Import ShowSchedule component
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isLiveClicked, setIsLiveClicked] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentShow, setCurrentShow] = useState<string>("Loading...");
  const [currentDJ, setCurrentDJ] = useState<string>("Loading...");
  const [nextShow, setNextShow] = useState<string>("Loading...");
  const [nextDJ, setNextDJ] = useState<string>("Loading...");
  const [nextTime, setNextTime] = useState<string>("Loading...");
  const navigate = useNavigate;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
        .replace(/ /g, '');
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleShowChange = (current: any, next: any, nextShowTime: string | null) => {
    if (current) {
      setCurrentShow(current.showTitle || "No Current Show");
      setCurrentDJ(current.name || "No DJ Available");
    } else {
      setCurrentShow("No Current Show");
      setCurrentDJ("No DJ Available");
    }

    if (next) {
      setNextShow(next.showTitle || "No Upcoming Show");
      setNextDJ(next.name || "No DJ Scheduled");
      setNextTime(nextShowTime || "No Time Available");
    } else {
      setNextShow("No Upcoming Show");
      setNextDJ("No DJ Scheduled");
      setNextTime("No Time Available");
    }
  };

  const toggleView = () => {
    if (!showCalendar) {
      window.location.href = "https://spinitron.com/WBRU/calendar";
    }
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.spinitron.com/static/js/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <DJSchedule onShowChange={handleShowChange} />
        <div className="home-button">
          <a href="/" title="Go Home">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </a>
        </div>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
            <div className="schedule-page">
              <div className="under-bar-content">
                <div className="under-bar-time">{currentTime}</div>
                <div className="under-bar-cp">CURRENTLY PLAYING</div>
                <div className="under-bar-un">UP NEXT</div>
              </div>

              <div className="player-container">
                <Player />
                <div className="spinitron-js-widget-container widget">
                  <iframe
                    src="//widgets.spinitron.com/widget/now-playing-v2?station=WBRU&num=1&sharing=1&cover=0&player=0"
                    allow="encrypted-media"
                  ></iframe>
                  <div className="up-next-show">{nextShow}</div>
                  <div className="up-next-dj">{nextDJ}</div>
                  <div className="up-next-time">{nextTime}</div>
                </div>
              </div>

              <button className="toggle-button" onClick={toggleView}>
                {showCalendar ? 'Back to Now Playing' : 'View Full Schedule'}
              </button>
              <div className={`sliding-content ${showCalendar ? 'show' : ''}`}></div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
