import { useEffect, useState } from "react";
import "./BlogPreview.css";
import { useNavigate } from "react-router-dom";
import { queryObjects } from "../cosmic";

export default function BlogPostList() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            // setPosts(await queryObjects({type: "posts"}));
            const x = await queryObjects({type: "posts"});
            setPosts(x.concat(x).concat(x));
        })();
    }, []);

    if (posts.length == 0) return null;

    return (
        <div className="preview-row">
            {posts.map((post, i) => (
                <PostPreview key={i} post={post} navigate={navigate} />
            ))}
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
                <p className="preview-content" dangerouslySetInnerHTML={{__html: post.metadata.content}}></p>
            </div>
        </div>
    );
}