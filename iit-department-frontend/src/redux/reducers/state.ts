import { IUser } from "../../types/user";
import { IAuth } from "../../types/auth";

// Интерфейс, описывающий дерево состояния
export interface IRootReducer {
    router: any,
    user: IUser,
    auth: IAuth,
}