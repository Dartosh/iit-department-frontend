import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TokensStateInterface } from '../../models/interfaces/state/tokens-state.interface';
import { TokensInterface } from '../../models/interfaces/tokens.interface';

const initialState: TokensStateInterface = {
    isLoading: false,
    error: '',
    tokens: null,
}

export const tokensSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action: PayloadAction<TokensInterface>) {
      state.isLoading = false;

      state.tokens = action.payload;
    },
    fetchErrors(state, action: PayloadAction<Error>) {
      state.isLoading = false;

      state.error = action.payload.message;
    }
  },
});

export default tokensSlice.reducer;