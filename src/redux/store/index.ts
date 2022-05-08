// import { createStore, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
// import { createBrowserHistory } from 'history';

// import rootReducer from "../reducers";
// import rootSaga from '../sagas';

// export const history = createBrowserHistory();

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers =
//     (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(sagaMiddleware, routerMiddleware(history))
// );

// const store = createStore(rootReducer, enhancer);

// sagaMiddleware.run(rootSaga);

// export default store;

import { createStore, compose } from 'redux';

import reducer from '../reducers';

const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = (preloadedState: any) => createStore(
    reducer,
    preloadedState,
    composeEnhancers(),
);

const store = configureStore({});

export default store;