import { useRef, useState } from "react";
import "./Player.css";

export default function Player() {
    const audioContainer = useRef();
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    function togglePlaying() {
        const containerEl = audioContainer.current;
        if (playing) {
            containerEl.removeChild(containerEl.firstChild);
            setPlaying(false);
            setLoading(false);
        } else {
            const audio = document.createElement("audio");
            audio.src = "https://listen.bsrlive.com/bsrmp3";
            // audio.controls = "controls";
            audio.autoplay = "true";
            audio.addEventListener("play", () => {
                setLoading(false);
            });
            containerEl.appendChild(audio);
            setPlaying(true);
            setLoading(true);
        }
    }

    return (
        <>
            <img className={`player-logo ${loading ? "spin" : ""}`} src="/disc_player.png" onClick={togglePlaying} /> {/* spins onclick */}
            <p className={`loading-text ${loading ? "" : "hidden"}`}>Loading...</p> {/* loads only if Clicked */}
            <div ref={audioContainer}></div>
        </>
    )
}
