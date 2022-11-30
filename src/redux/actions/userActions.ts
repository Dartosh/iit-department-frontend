import http from '../../services/http';
import { AuthMethodsEnum } from '../../models/enums/authMethodsEnum';
import { tokensSlice } from '../slices/token-slice';
import { AppDispatch } from '../store';
import { userSlice } from '../slices/user-slice';
import { UserInterface } from '../../models/interfaces/user.interface';
import { getProfileByIdPath } from '../../utils/pathParamsCreator';

export const fetchGetProfile = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching());

      const response = await http.get<UserInterface>(getProfileByIdPath(userId));

      dispatch(userSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(userSlice.actions.fetchErrors(error as Error));
    }
  }
};
