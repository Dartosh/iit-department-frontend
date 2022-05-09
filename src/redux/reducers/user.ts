import { SET_USER_JWT } from "../constants";

const initialState = {
    tokens: { },
};

const user = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USER_JWT:
            return {
                ...state,
                tokens: { ...state.tokens, ...payload },
            }
        default:
            return state;
    }
};

export default user;