import { combineReducers } from "redux";

const test = (state = {}, action: any) => {
    return state;
}

const reducer = combineReducers({
    test,
});

export default reducer;