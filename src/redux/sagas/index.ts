import { takeEvery, put, call } from 'redux-saga/effects';

import { GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from "../../api";
import { setLatestNews } from '../actions/actionCreator';

export function* handleLatestNews(): Object {
    const { hits } = yield call(getLatestNews);
    yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
    yield watchClickSaga();
}