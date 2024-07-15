import * as apiService from "./requester"

const endpoints = {
    getAll: '/data/games?sortBy=_createdOn%20desc',
}

export const getAll = async () => {
    return apiService.get(endpoints.getAll);
}