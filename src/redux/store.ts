import { configureStore, combineReducers } from '@reduxjs/toolkit';

import tokensReducer from './slices/token-slice';
import userReducer from './slices/user-slice'

const rootReducer = combineReducers({
  tokens: tokensReducer,
  user: userReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];