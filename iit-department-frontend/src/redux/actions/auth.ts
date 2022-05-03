import { createAction } from 'redux-actions';
import {IAuth, ILogin} from "../../types";

enum Type {
    SET_AUTH = 'SET_AUTH',
    SIGN_IN = 'SIGN_IN',
    //SIGN_UP = 'SIGN_UP',
}

const setAuthInfo = createAction<IAuth>(Type.SET_AUTH);
const signIn = createAction<ILogin>(Type.SIGN_IN);
//const signUp = createAction<ISignup>(type.SIGN_UP);


// Экспорт экшенов, содержащие тип и некоторый хендлер
export const AuthActions = {
    Type,

    setAuthInfo,
    signIn,
    //signUp,
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>