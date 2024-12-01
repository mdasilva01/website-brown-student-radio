import { useEffect, useState } from "react";
import "./BlogPreview.css";
import { useNavigate } from "react-router-dom";
import { queryObjects } from "../cosmic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function BlogPostList() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);

    useEffect(() => {
        (async () => {
            // setPosts(await queryObjects({type: "posts"}));
            const x = await queryObjects({ type: "posts" });
            setPosts(x.concat(x).concat(x));
        })();
    }, []);

    if (posts.length == 0) return null;

    const handleLeftClick = () => {
        const cardsPerScroll = window.innerWidth <= 768 ? 1 : 4; // Scroll by 1 for phone, 4 for larger screens
        if (currentStartIndex > 0) {
            setCurrentStartIndex((prevIndex) => Math.max(0, prevIndex - cardsPerScroll));
        }
    };

    const handleRightClick = () => {
        const cardsPerScroll = window.innerWidth <= 768 ? 1 : 4; // Scroll by 1 for phone, 4 for larger screens
        if (currentStartIndex + cardsPerScroll < posts.length) {
            setCurrentStartIndex((prevIndex) =>
                Math.min(posts.length - cardsPerScroll, prevIndex + cardsPerScroll)
            );
        }
    };

    const isLeftDisabled = currentStartIndex === 0;
    const isRightDisabled = currentStartIndex + 4 >= posts.length;

    return (
        <div className="tags-container">
            <div className="home-button">
                <a href="/" title="Go Home">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </a>
            </div>

            <div className="carousel-container">
                <button
                    className={`carousel-arrow left-arrow ${isLeftDisabled ? "disabled" : ""}`}
                    onClick={handleLeftClick}
                    disabled={isLeftDisabled}
                >
                    &#9664;
                </button>

                <div className="DJ-container">
                    {posts
                        .slice(currentStartIndex, currentStartIndex + 4)
                        .map((post, index) => (
                            <div key={`card-${index}`} className="card preview-post" onClick={() => navigate(`/blog/${post.id}`)}>
                                <div className="card-content">
                                    {post.metadata["main-image"] && <img src={post.metadata["main-image"].url} alt={post.title} />}
                                    <p className="card-title">{post.title}</p>
                                    <p className="card-description preview-content" dangerouslySetInnerHTML={{__html: post.metadata.content}}></p>
                                </div>
                            </div>
                        ))}
                </div>


                <button
                    className={`carousel-arrow right-arrow ${isRightDisabled ? "disabled" : ""
                        }`}
                    onClick={handleRightClick}
                    disabled={isRightDisabled}
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
}

function PostPreview({ post, navigate }) {
    return (
        <div className="preview-post" onClick={() => navigate(`/blog/${post.id}`)}>
            <div className="preview-inner">
                <div className="preview-image-container">
                    <img src={post.metadata["main-image"].url} />
                </div>
                <h3>{post.title}</h3>
                <p>By {post.metadata.author} - {post.metadata.date}</p>
                <p className="preview-content" dangerouslySetInnerHTML={{ __html: post.metadata.content }}></p>
            </div>
        </div>
    );
}