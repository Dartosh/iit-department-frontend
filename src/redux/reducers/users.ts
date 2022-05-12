import { SET_USERS_PAGINATION } from "../constants";

const initialState = {
    currentUsers: [],
};

const users = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USERS_PAGINATION:
            return {
                ...state,
                currentUsers: [ ...state.currentUsers, ...payload.results ],
            }
        default:
            return state;
    }
};

export default users;