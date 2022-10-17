import { useDispatch } from "react-redux";

import './Home.css';
// import { getUserJwt, getPosts, getUsers } from "../../redux/actions/actionCreator";

const Home = () => {
    const dispatch = useDispatch();

    // const handleAuth = () => {
    //     dispatch(getUserJwt());
    // }

    // const handlePosts = () => {
    //     dispatch(getPosts());
    // }

    // const handleUsers = () => {
    //     dispatch(getUsers());
    // }

    return(
        <main>
            {/* <button onClick={handleAuth}>Auth</button>
            <button onClick={handlePosts}>GetPosts</button>
            <button onClick={handleUsers}>GetUsers</button> */}
            Home
        </main>
    )
}

export default Home;