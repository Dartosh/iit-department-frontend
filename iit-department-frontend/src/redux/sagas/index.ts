import { all } from 'redux-saga/effects';

// в sagas будут накапливаться саги, куда в yield all будут передаваться все saga-вызовы

// Фнкция-генератор, которая делает yield all
export default function* rootSaga() {
    yield all([]);
}