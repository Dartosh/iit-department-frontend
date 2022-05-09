import { SET_LATEST_NEWS } from "../constants";

const initialState = {
    latestNews: [],
};

const news = (state = initialState, action: any) => {
    const type = action.type;
    const payload = action.payload;

    switch (type) {
        case SET_LATEST_NEWS:
            return{
                ...state,
                latestNews: [...state.latestNews, ...payload],
            }
        default: return state;
    }
}

export default news;