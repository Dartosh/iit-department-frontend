import { combineReducers } from "redux";

import tokens from "./tokens";
import posts from "./posts";
import users from "./users";

const reducer = combineReducers({
    tokens,
    posts,
    users,
});

export default reducer;