import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogPost.css";
import { queryObjects } from "../cosmic";

export default function BlogPost() {
    const {postID} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            setPost((await queryObjects({type: "posts", id: postID}))[0]);
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