import {
    SET_USER_JWT,
    GET_USER_JWT,
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