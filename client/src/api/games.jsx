import * as apiService from "./requester"

const endpoints = {
    getAll: '/data/games?sortBy=_createdOn%20desc',
    latestThree: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    createGame: '/data/games',
    getOne: '/data/games/',
    editGame: '/data/games/'
}

export const getAll = async () => {
    return apiService.get(endpoints.getAll);
}

export const getLatestThree = async () => {
    return apiService.get(endpoints.latestThree);
}

export const createGame = async (gameData) => {
    return apiService.post(endpoints.createGame, gameData)
}

export const getOne = async (gameId) => {
    return apiService.get(endpoints.getOne + gameId);
}

export const editGame = async (gameId, gameData) => {
    return apiService.put(endpoints.editGame + gameId, gameData)
}