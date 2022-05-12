import { call, takeEvery, put, spawn, all } from 'redux-saga/effects';
import loginUser from '../../api/login-user';
import getPosts from '../../api/posts';
import { setUserJwt, setPosts } from '../actions/actionCreator';

import { GET_POSTS_PAGINATION, GET_USER_JWT } from "../constants";

export function* userLoginWorker(): any {
    const tokens = yield call(loginUser);
    yield put(setUserJwt(tokens));
}

export function* loadPostsWorker(): any {
    const posts = yield call(getPosts);
    yield put(setPosts(posts));
}

export function* loadStartData() {
    yield all([
        takeEvery(GET_USER_JWT, userLoginWorker),
        takeEvery(GET_POSTS_PAGINATION, loadPostsWorker),
    ]);
}

export default function* rootSaga(): any {
    const sagas = [loadStartData];

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch(error) {
                    console.log(error);
                }
            }
        });
    });

    yield all(retrySagas);
}