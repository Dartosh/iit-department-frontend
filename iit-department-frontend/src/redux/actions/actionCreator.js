import {LOG_IN} from "../constants";

export const logIn = ( login, password ) => ({
    type: LOG_IN,
    login,
    password,
});