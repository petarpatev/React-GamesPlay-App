import { useState, useContext, useEffect } from "react"
import { UserContext } from "../../App"

import * as authService from '../../api/auth'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    function changeHandler(e) {
        setLoginValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    async function submitHandler(e) {
        e.preventDefault();
        const user = await authService.login(loginValues.email, loginValues.password);
        setUser(user);
        navigate('/');
    }

    return (
        <section id="login-page" className="auth">
            <form onSubmit={submitHandler} id="login">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={changeHandler}
                        value={loginValues.email}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={changeHandler}
                        value={loginValues.password}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}