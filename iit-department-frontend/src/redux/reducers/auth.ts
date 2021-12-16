import { handleActions } from "redux-actions";
import { IAuth } from "../../types/auth";
import { AuthActions } from "../actions/auth";

const initialState = null;

// Из импортированного AuthActions берётся Type и указывается, что обрабатывается тип SET_AUTH
// И устанавливается соответствующиё хендлер для данного действия
// Также указываются возможные состояния initialState: IAuth или null. Второй аргумент - тип payload.
export const AuthReducer = handleActions<IAuth | null, IAuth>({
   [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
}, initialState);