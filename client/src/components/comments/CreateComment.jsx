import { useState } from "react"

import * as commentsService from "../../api/comments"

export default function CreateComment({ gameId, onAddComment }) {

    const [commentValue, setCommentValue] = useState({
        comment: ''
    });

    const onChange = (e) => {
        setCommentValue(state => ({
            ...state,
            comment: e.target.value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const commentText = commentValue.comment;
        const newComment = await commentsService.create({
            gameId: gameId,
            comment: commentText
        })
        onAddComment(newComment);
        setCommentValue(state => ({ ...state, comment: '' }));
        e.target.reset();
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form onSubmit={submitHandler} className="form">
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    onChange={onChange}
                    value={commentValue.comment}
                />
                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Add Comment"
                />
            </form>
        </article>
    )
}