import { useDispatch } from "react-redux";

import './Home.css';
import LoginContainer from "../auth/LoginContainer"
import { getUserJwt, getPosts, getUsers } from "../../redux/actions/actionCreator";

const Home = () => {
    const dispatch = useDispatch();

    const handleAuth = () => {
        dispatch(getUserJwt());
    }

    const handlePosts = () => {
        dispatch(getPosts());
    }

    const handleUsers = () => {
        dispatch(getUsers());
    }

    return(
        <main>
            <LoginContainer />
            <button onClick={handleAuth}>Auth</button>
            <button onClick={handlePosts}>GetPosts</button>
            <button onClick={handleUsers}>GetUsers</button>
        </main>
    )
}

export default Home;