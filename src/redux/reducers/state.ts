import { IUser, IAuth } from "../../types";

// Интерфейс, описывающий дерево состояния
export interface IRootState {
    router: any,
    user: IUser,
    auth: IAuth,
}