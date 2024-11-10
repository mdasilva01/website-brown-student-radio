import { useState } from "react";
import { postObject } from "../cosmic";
import "./BlogUpload.css";

export default function BlogUpload() {
    const [postName, setPostName] = useState("");
    const [postAuthor, setPostAuthor] = useState("");
    const [postContent, setPostContent] = useState("");

    async function makePost() {
        await postObject({
            title: postName,
            type: "posts",
            metadata: {
                author: postAuthor,
                date: "today",
                content: postContent
            }
        });
    }

    return (
        <>
            <h3>Make a new blog post</h3>
            <input type="text" placeholder="Post name" value={postName} onChange={e => setPostName(e.target.value)} />
            <input type="text" placeholder="Post author" value={postAuthor} onChange={e => setPostAuthor(e.target.value)} />
            <textarea rows={4} placeholder="Post content" value={postContent} onChange={e => setPostContent(e.target.value)}></textarea>
            <button onClick={makePost}>Make it</button>
        </>
    );
}