import { combineReducers } from 'redux';
import user from './user';

// Возвращение объекта рельюсеров
const rootReducer = combineReducers({ user });

export default rootReducer;