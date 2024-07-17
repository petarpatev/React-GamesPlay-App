import * as gamesService from '../../api/games'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { isValid } from '../../utils';

export default function EditPage() {

    const navigate = useNavigate();
    const gameId = useParams().gameId;
    const [game, setGame] = useState(null);
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    useEffect(() => {
        (async function getGame() {
            const game = await gamesService.getOne(gameId);
            setGame(game);
        })();
    }, [gameId]);

    useEffect(() => {
        if (game) {
            setFormValues({
                title: game.title,
                category: game.category,
                maxLevel: game.maxLevel,
                imageUrl: game.imageUrl,
                summary: game.summary
            })
        }
    }, [game]);

    const onChange = (e) => {
        setFormValues(old => ({
            ...old,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (isValid(formValues)) {
            await gamesService.editGame(gameId, formValues);
            navigate(`/details/${gameId}`)
        } else {
            alert('All fields are required');
        }
    }

    return (
        <section id="edit-page" className="auth">
            <form onSubmit={onSubmitHandler} id="edit">
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={onChange}
                        value={formValues.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={onChange}
                        value={formValues.category}
                    />
                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        onChange={onChange}
                        value={formValues.maxLevel}
                    />
                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChange}
                        value={formValues.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={onChange}
                        value={formValues.summary}
                    />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}