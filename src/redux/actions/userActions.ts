import http from '../../services/http';
import { AuthMethodsEnum } from '../../models/enums/authMethodsEnum';
import { tokensSlice } from '../slices/token-slice';
import { AppDispatch } from '../store';
import { userSlice } from '../slices/user-slice';
import { UserInterface } from '../../models/interfaces/user.interface';
import { getProfileByIdPath } from '../../utils/pathParamsCreator';
import { UpdateUserInterface } from '../../models/interfaces/users/update-user.interface';
import usersService from '../../services/users';

export const fetchGetProfile = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching());

      const response = await usersService.getUserProfileById(userId);

      dispatch(userSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(userSlice.actions.fetchErrors(error as Error));
    }
  }
};

export const fetchUpdateProfile = (userId: number, userBody: UpdateUserInterface) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching());

      const response = await usersService.updateUserProfileById(userId, userBody);

      dispatch(userSlice.actions.fetchSuccess(response));
    } catch (error) {
      dispatch(userSlice.actions.fetchErrors(error as Error));
    }
  }
};
