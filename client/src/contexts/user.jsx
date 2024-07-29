import { createContext, useState, useEffect } from 'react'
import { clearUserData, getUserData, setUserData } from '../utils'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = getUserData();
        return savedUser ? savedUser : null
    });

    const setUserWrapper = (data) => {
        setUser(data);
    }

    useEffect(() => {
        if (user) {
            setUserData(user);
        } else {
            clearUserData()
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUserWrapper }}>
            {children}
        </UserContext.Provider >
    )
}