import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import * as gamesService from "../../api/games"
import * as commentsService from "../../api/comments"
import { UserContext } from "../../contexts/user";
import { Link } from "react-router-dom";

import CreateComment from "../comments/CreateComment";

export default function DetailsPage() {

    const gameId = useParams().gameId;
    const { user } = useContext(UserContext);

    const [game, setGame] = useState(null);
    const [comments, setComments] = useState([]);
    const [isOwner, setIsOwner] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        (async function getGame() {
            const [game, comments] = await Promise.all([
                gamesService.getOne(gameId),
                commentsService.getById(gameId)
            ]);
            setGame(game)
            setComments(comments)
            if (user) {
                setIsOwner(game._ownerId == user._id);
            }
        })()
    }, [gameId]);

    function onAddComment(newComment) {
        setComments(old => ([
            ...old,
            newComment
        ]))
    }

    async function onDeleteHandler() {
        const choice = confirm('Are you sure you want to delete this game?');
        if (choice) {
            await gamesService.removeGame(game._id);
            navigate('/');
        }
    }

    if (!game) return <div>Loading...</div>

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>

                    <ul>
                        {comments.length > 0
                            ? comments.map(comment => <li key={comment._id} className="comment">
                                <p>Content: {comment.comment}</p>
                            </li>)

                            : <p className="no-comment">No comments.</p>}
                    </ul>
                </div>
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/edit/${game._id}`} className="button">
                            Edit
                        </Link>
                        <Link onClick={onDeleteHandler} to="#" className="button">
                            Delete
                        </Link>
                    </div>
                }
                {(user && !isOwner) && <CreateComment gameId={gameId} onAddComment={onAddComment} />}
            </div>

        </section>
    )
}