import {
    SET_USER_JWT,
    GET_USER_JWT,
    GET_POSTS_PAGINATION,
    SET_POSTS_PAGINATION,
    GET_USERS_PAGINATION,
    SET_USERS_PAGINATION,
} from '../constants';

export const getUserJwt = () => {
    return({
        type: GET_USER_JWT,
    });
};

export const setUserJwt = (payload: any) => {
    return({
        type: SET_USER_JWT,
        payload,
    });
};

export const getPosts = () => {
    return({
        type: GET_POSTS_PAGINATION,
    });
};

export const setPosts = (payload: any) => {
    return({
        type: SET_POSTS_PAGINATION,
        payload,
    });
};

export const getUsers = () => {
    return({
        type: GET_USERS_PAGINATION,
    });
};

export const setUsers = (payload: any) => {
    return({
        type: SET_USERS_PAGINATION,
        payload,
    });
};