import { useState, useContext } from "react"
import { UserContext } from "../../contexts/user"

import * as authService from '../../api/auth'
import { useNavigate } from "react-router-dom";

import { isValid } from "../../utils";

export default function RegisterPage() {

    const { setUserWrapper } = useContext(UserContext);
    const navigate = useNavigate();

    const [registerValues, setRegisterValues] = useState({
        email: '',
        password: '',
        ['confirm-password']: ''
    })

    function changeHandler(e) {
        setRegisterValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    async function submitHandler(e) {
        e.preventDefault();
        if (isValid(registerValues)) {
            const user = await authService.register(registerValues.email, registerValues.password);
            setUserWrapper(user);
            navigate('/');
            e.target.reset();
        }
        else {
            alert("All fields are required!");
        }
    }

    return (
        <section id="register-page" className="content auth">
            <form onSubmit={submitHandler} id="register">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={changeHandler}
                        value={registerValues.email}
                    />
                    <label htmlFor="register-password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={changeHandler}
                        value={registerValues.password}
                    />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={changeHandler}
                        value={registerValues.confirmPassword}
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}