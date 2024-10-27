import { useEffect, useState } from "react";
import "./BlogPreview.css";
import { useNavigate } from "react-router-dom";

export default function BlogPreview() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY&query=${encodeURIComponent(`{"type": "posts"}`)}&limit=100`);
            setPosts((await response.json()).objects);
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