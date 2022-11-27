import jwt from 'jwt-decode';

import http from '../../services/http';
import { AuthMethodsEnum } from '../../models/enums/authMethodsEnum';
import { TokenPayloadInterface } from '../../models/interfaces/tokenPayloadInterface';
import { TokensInterface } from '../../models/interfaces/tokens.interface';
import { UserInterface } from '../../models/interfaces/user.interface';
import { getAuthHeader } from '../../utils/authHeaderCreator';
import { getProfileByIdPath } from '../../utils/pathParamsCreator';
import { AuthBodyBuilder } from '../classes/AuthBodyBuilder';
import { tokensSlice } from '../slices/token-slice';
import { userSlice } from '../slices/user-slice';
import { AppDispatch } from '../store';
import authService from '../../services/auth';
import usersService from '../../services/users';

export const fetchTokens = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    const authBody = new AuthBodyBuilder(username, password);

    try {
      dispatch(tokensSlice.actions.fetching());

      const tokensResponse = await authService.authUser(username, password);

      dispatch(tokensSlice.actions.fetchSuccess(tokensResponse));

      const userId = authService.getUserIdFromToken(tokensResponse.access);

      console.log(userId);

      dispatch(userSlice.actions.fetching());

      const userProfile = await usersService.getUserProfileById(userId);

      dispatch(userSlice.actions.fetchSuccess(userProfile));
    } catch (error) {
      dispatch(tokensSlice.actions.fetchErrors(error as Error));
    }
  }
};
