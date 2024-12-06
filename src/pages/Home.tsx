import { useRef, useState } from "react";
import './Home.css';
import '../fonts/univers-lt-std-webfont/univers-font.css';

export default function Home() {
    const audioContainer = useRef<HTMLDivElement>(null);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    function togglePlaying() {
        const containerEl = audioContainer.current;
        if (!containerEl) {
            console.error("audioContainer is not attached to a DOM element.");
            return;
        }
        if (playing) {
            if (containerEl.firstChild) {
                containerEl.removeChild(containerEl.firstChild);
            }
            setPlaying(false);
            setLoading(false);
            console.log("not playing");
        } else {
            const audio = document.createElement("audio");
            audio.src = "https://listen.bsrlive.com/bsrmp3";
            audio.autoplay = true;
            setLoading(true);

            audio.addEventListener("play", () => {
                setLoading(false); // Stop showing the loading text when playback starts
            });

            containerEl.appendChild(audio);
            setPlaying(true);
            console.log("playing");
        }
    }

    return (
        <div id="home" className="home-container">
            <div className="text-wrapper">
                <img 
                    className={`play-gif ${loading ? "spin" : ""}`} 
                    src="/play.gif" 
                    onClick={togglePlaying} 
                    alt="Play Button" 
                />
                <h1 className="title">BSR101.1</h1>
                <div ref={audioContainer}></div>
            </div>
            <div className="loading-container">
                <p className={`loading-text ${loading ? "" : "hidden"}`}>Loading...</p>
            </div>
        </div>
    );
}
