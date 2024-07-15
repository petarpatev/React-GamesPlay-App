import { useState, useEffect } from "react"
import * as gamesService from "../../api/games"
import Game from "../game/Game";

export default function CatalogPage() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        (async function getGames() {
            const games = await gamesService.getAll();
            setGames(games)
        })()
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <Game key={game._id} game={game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}