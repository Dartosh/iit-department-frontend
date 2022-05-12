import { combineReducers } from "redux";

import tokens from "./tokens";
import posts from "./posts";

const reducer = combineReducers({
    tokens,
    posts,
});

export default reducer;