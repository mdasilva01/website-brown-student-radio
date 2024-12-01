import './Home.css';
import { useRef, useState } from "react";

export default function Home() {
    const audioContainer = useRef<HTMLDivElement>(null); ;
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
            // audio.controls = "controls";
            audio.autoplay = true;
            audio.addEventListener("play", () => {
                setLoading(false);
            });
            containerEl.appendChild(audio);
            setPlaying(true);
            setLoading(true);
            console.log("playing");
        }
    }
    return (
        <div id="home" className="home-container">
            <div className="text-wrapper">
                <img className="play-gif" src="/play.gif" onClick={togglePlaying}/>
                <h1 className="title">BSR101.1</h1>
                <div ref={audioContainer}></div>
            </div>
        </div>
    );
}