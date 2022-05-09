import {
    GET_LATEST_NEWS,
    SET_LATEST_NEWS,
    GET_USER_JWT,
} from '../constants';

export const getLatestNews = () => ({
    type: GET_LATEST_NEWS,
})

export const setLatestNews = (payload: []) => ({
    type: SET_LATEST_NEWS,
    payload,
})

export const getUserJwt = () => ({
    type: GET_USER_JWT,
})