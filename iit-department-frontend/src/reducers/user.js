import { LOG_IN } from "../constants";

const POSTS = [
    {
        id: 1,
        text: 'Bla-bla-bla',
    },
    {
        id: 2,
        text: 'Bla-bla-bla',
    },
    {
        id: 3,
        text: 'Bla-bla-bla',
    }
]

const user = (state = [], { type, login, password }) => {
    switch ( type ) {
        case LOG_IN :
            return [
                ...state, {
                    password,
                    login,
                }
            ]
        default:
            return state;
    }
}

export default user;