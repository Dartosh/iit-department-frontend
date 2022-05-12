import { SET_POSTS_PAGINATION } from "../constants";

const initialState = {
    currentPosts: [],
};

const posts = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SET_POSTS_PAGINATION:
            return {
                ...state,
                currentPosts: [ ...state.currentPosts, ...payload.results ],
            }
        default:
            return state;
    }
};

export default posts;