import { configureStore, combineReducers } from '@reduxjs/toolkit';

import tokensReducer from './slices/application-slice';

const rootReducer = combineReducers({
  tokens: tokensReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}