import { call, takeEvery, put } from 'redux-saga/effects';
import loginUser from '../../api/login-user';
import { setUserJwt } from '../actions/actionCreator';

import { GET_USER_JWT } from "../constants";

export function* handleUserLogin(): any {
    const user = yield call(loginUser);
    yield put(setUserJwt(user));
}

export function* watchClickSaga() {
    yield takeEvery(GET_USER_JWT, handleUserLogin);
}

export default function* rootSaga() {
    yield watchClickSaga();
}