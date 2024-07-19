import * as apiService from "./requester"

const endpoints = {
    createComment: '/data/comments',
    getById: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`
}

export const create = async (commentData) => {
    return apiService.post(endpoints.createComment, commentData);
}

export const getById = async (gameId) => {
    return apiService.get(endpoints.getById(gameId));
}