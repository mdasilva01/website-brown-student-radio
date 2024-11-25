import Player from '../components/Player';
import Shows from '../components/Shows';
import './Home.css';
import '../fonts/univers-lt-std-webfont/univers-font.css';


export default function Home() {
    return (
        <div id="home">
            <h1 className="title">BSR101.1</h1>
            {/* <h3>
                Click to listen to <span className="accent">101.1 FM LP-Providence</span>
            </h3>
            <h1>Brown Student & Community Radio</h1>
            <Player />
            <br />
            <Shows />
            <br />
            <h2 className="home-text">Latest posts</h2>
            <BlogPreview /> */}
        </div>
    );
}