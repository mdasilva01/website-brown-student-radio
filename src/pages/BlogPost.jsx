import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogPost.css";

export default function BlogPost() {
    const {postID} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            const query = {type: "posts", id: postID}
            const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY&query=${encodeURIComponent(JSON.stringify(query))}&limit=100`);
            setPost((await response.json()).objects[0]);
        })();
    }, []);

    if (!post) return null;

    return (
        <div className="post-container">
            <div className="center">
                <h2>{post.title}</h2>
                <p>By {post.metadata.author} - {post.metadata.date}</p>
            </div>
            <hr />
            <p dangerouslySetInnerHTML={{__html: post.metadata.content}}></p>
        </div>
    );
}