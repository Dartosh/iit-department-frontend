import { useDispatch } from "react-redux";

import './Home.css';
import LoginContainer from "../auth/LoginContainer"
import { getUserJwt } from "../../redux/actions/actionCreator";

const Home = () => {
    const dispatch = useDispatch();

    const handleAuth = () => {
        dispatch(getUserJwt());
    }

    return(
        <main>
            <LoginContainer />
            <button onClick={handleAuth}>GetNews</button>
        </main>
    )
}

export default Home;