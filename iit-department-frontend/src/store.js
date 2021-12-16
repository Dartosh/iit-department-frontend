import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';


// Логика, отделённая игнором lint нужна для подключения к приложению
// redux-dev-tools, если оно находится в режиме разработки

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(),
    )
);

const store = configureStore({});

export default store;