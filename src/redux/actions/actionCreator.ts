import {
    SET_USER_JWT,
    GET_USER_JWT,
    GET_POSTS_PAGINATION,
    SET_POSTS_PAGINATION,
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