import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../../App"

export default function Navigation() {

    const { user } = useContext(UserContext);

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalog">All games</Link>
                {user
                    ? <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    )
}