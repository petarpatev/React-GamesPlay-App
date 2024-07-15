import { setUserData, clearUserData } from "../utils.jsx";
import * as apiService from "./requester.jsx";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export const login = async (email, password) => {
    const user = await apiService.post(endpoints.login, { email, password });
    setUserData(user);
    return user;
}

export const register = async (email, password) => {
    const user = await apiService.post(endpoints.register, { email, password });
    setUserData(user);
    return user;
}

export const logout = () => {
    apiService.get(endpoints.logout);
    clearUserData();
}