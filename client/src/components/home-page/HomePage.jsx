import { useState, useEffect } from "react"
import * as gamesService from "../../api/games"
import LatestGame from "../game/LatestGame";

export default function HomePage() {

    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async function getLatestGames() {
            const latestGames = await gamesService.getLatestThree();

            setLatestGames(latestGames);
        })()
    }, [])

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {latestGames.length > 0
                    ? latestGames.map(game => <LatestGame key={game._id} latestGame={game} />)
                    : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    )
}