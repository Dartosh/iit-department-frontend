import { SET_USER_JWT } from "../constants";

const initialState = {
    userInfo: [],
};

const user = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USER_JWT:
            return {
                ...state,
                userInfo: [...state.userInfo, ...payload],
            }
        default:
            return state;
    }
};

export default user;