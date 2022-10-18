import jwt from 'jwt-decode';

import http from '../../http';
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

export const fetchTokens = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    const authBody = new AuthBodyBuilder(username, password);

    try {
      dispatch(tokensSlice.actions.fetching());

      const tokensResponse = await http.post<TokensInterface>(AuthMethodsEnum.create, authBody);

      dispatch(tokensSlice.actions.fetchSuccess(tokensResponse.data));

      const decodedTokenPayload = jwt(tokensResponse.data.access) as TokenPayloadInterface;

      const userId: number = decodedTokenPayload.user_id;

      const userResponse = await http.get<UserInterface>(getProfileByIdPath(userId), {
        headers: getAuthHeader(tokensResponse.data.access),
      })

      dispatch(userSlice.actions.fetchSuccess(userResponse.data));
    } catch (error) {
      dispatch(tokensSlice.actions.fetchErrors(error as Error));
    }
  }
};
