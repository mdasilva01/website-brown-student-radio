import { useEffect, useState } from "react";
import "./BlogPreview.css";
import { useNavigate } from "react-router-dom";
import { queryObjects } from "../cosmic";

export default function BlogPreview() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            setPosts(await queryObjects({type: "posts"}));
        })();
    }, []);

    return (
        <>
            {posts.map(post => PostPreview({post, navigate}))}
        </>
    );
}

function PostPreview({ post, navigate }) {
    return (
        <div className="preview-post" onClick={() => navigate(`/blog/${post.id}`)}>
            <div className="preview-inner">
                <h3>{post.title}</h3>
                <p>By {post.metadata.author} - {post.metadata.date}</p>
                <p className="preview-content" dangerouslySetInnerHTML={{__html: post.metadata.content}}></p>
            </div>
        </div>
    );
}