import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogPost.css";
import { postObject, queryObjects } from "../cosmic";

export default function BlogPost() {
    const {postID} = useParams();

    const [comments, setComments] = useState([]);

    async function loadComments() {
        setComments(await queryObjects({type: "comments", "metadata.post-id": postID}));
    }

    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            setPost((await queryObjects({type: "posts", id: postID}))[0]);
            await loadComments();
        })();
    }, [postID]);

    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentText, setCommentText] = useState("");

    async function postComment() {
        await postObject({
            title: "comment-" + Math.floor(Math.random() * 1e6),
            type: "comments",
            metadata: {
                "post-id": postID,
                author: commentAuthor,
                content: commentText
            }
        });
        await loadComments();
    }

    if (!post) return null;

    return (
        <div className="post-container">
            <div className="center">
                <h2>{post.title}</h2>
                <p>By {post.metadata.author} - {post.metadata.date}</p>
            </div>
            <hr />
            <p dangerouslySetInnerHTML={{__html: post.metadata.content}}></p>
            <hr />
            {comments.map(comment => (
                <div className="comment">
                    <p><b>{comment.metadata.author}</b> says:</p>
                    <p>{comment.metadata.content}</p>
                </div>
            ))}
            <input type="text" placeholder="Name" value={commentAuthor} onChange={e => setCommentAuthor(e.target.value)} />
            <textarea placeholder="Comment" rows="4" value={commentText} onChange={e => setCommentText(e.target.value)}></textarea>
            <button onClick={postComment}>Post</button>
        </div>
    );
}