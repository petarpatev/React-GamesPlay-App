import { useState } from "react"

import * as gamesService from '../../api/games'
import { useNavigate } from "react-router-dom";

import { isValid } from "../../utils";

export default function CreatePage() {

    const navigate = useNavigate();

    const [gameValues, setGameValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    })

    function changeHandler(e) {
        setGameValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    async function submitHandler(e) {
        e.preventDefault();
        if (isValid(gameValues)) {
            const game = await gamesService.createGame(gameValues);
            navigate('/');
            e.target.reset();
        }
        else {
            alert("All fields are required!");
        }
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={submitHandler} id="create">
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={changeHandler}
                        value={gameValues.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={changeHandler}
                        value={gameValues.category}
                    />
                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={changeHandler}
                        value={gameValues.maxLevel}
                    />
                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={changeHandler}
                        value={gameValues.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={changeHandler}
                        value={gameValues.summary}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    )
}