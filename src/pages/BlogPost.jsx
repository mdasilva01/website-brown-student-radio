import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogPost.css";
import { deleteObject, postObject, queryObjects } from "../cosmic";

export default function BlogPost() {
    const {postID} = useParams();

    const [adminMode, setAdminMode] = useState(true);

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        (async () => {
            setPost((await queryObjects({type: "posts", id: postID}))[0]);
            setComments(await queryObjects({type: "comments", "metadata.post-id": postID}));
        })();
    }, [postID]);

    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentText, setCommentText] = useState("");

    async function postComment() {
        if (commentAuthor.trim() == "" || commentText.trim() == "") return;

        const newComment = {
            title: "comment-" + Math.floor(Math.random() * 1e6),
            type: "comments",
            metadata: {
                "post-id": postID,
                author: commentAuthor,
                content: commentText
            }
        };

        setShowLoader(true);
        await postObject(newComment);
        setShowLoader(false);

        newComment.id = newComment.title;
        setComments([newComment].concat(comments));

        setCommentAuthor("");
        setCommentText("");
    }

    async function deleteComment(id) {
        await deleteObject(id);

        setComments(comments.filter(comment => comment.id != id));
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
            <h3>{comments.length} comment{comments.length == 1 ? "" : "s"}</h3>
            <table className="comment-table">
                <tbody>
                    {comments.map(comment => (
                        <tr className="comment" key={comment.id}>
                            <td>
                                <p>
                                    <b>{comment.metadata.author}</b>
                                </p>
                            </td>
                            <td>
                                <p>{comment.metadata.content}</p>
                            </td>
                            {adminMode ? (
                                <td>
                                    <button className="comment-delete" onClick={() => deleteComment(comment.id)}>&times;</button>
                                </td>
                            ) : null}
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <h3>Post a comment</h3>
            <br />
            <p>
                Name: <input type="text" className="comment-name-input" value={commentAuthor} onChange={e => setCommentAuthor(e.target.value)} />
            </p>
            <textarea placeholder="Your comment..." rows="4" value={commentText} onChange={e => setCommentText(e.target.value)}></textarea>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button className="comment-post-button" onClick={postComment}>Post</button>
                        </td>
                        <td>
                            {showLoader ? (<div className="loader"></div>) : null}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}