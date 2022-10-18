import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserStateInterface } from '../../models/interfaces/state/UserStateInterface';
import { UserInterface } from '../../models/interfaces/user.interface';

const initialState: UserStateInterface = {
    isLoading: false,
    error: '',
    user: null,
}

export const userSlice = createSlice({
  name: 'user/profile',
  initialState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action: PayloadAction<UserInterface>) {
      state.isLoading = false;

      state.user = action.payload;

      state.error = '';
    },
    fetchErrors(state, action: PayloadAction<Error>) {
      state.isLoading = false;

      state.error = action.payload.message;
    }
  },
});

export default userSlice.reducer;