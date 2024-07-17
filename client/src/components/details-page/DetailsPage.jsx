import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import * as gamesService from "../../api/games"
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

export default function DetailsPage() {

    const gameId = useParams().gameId;
    const user = useContext(UserContext);

    const [game, setGame] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        (async function getGame() {
            const game = await gamesService.getOne(gameId);
            setGame(game)
            if (user) {
                setIsOwner(game._ownerId == user.user._id);
            }
        })()
    }, [gameId]);

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
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
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
            </div>

        </section>
    )
}