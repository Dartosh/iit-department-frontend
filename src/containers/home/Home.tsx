import { useDispatch } from "react-redux";

import './Home.css';
import LoginContainer from "../auth/LoginContainer"
import { getLatestNews } from "../../redux/actions/actionCreator";

const Home = () => {
    const dispatch = useDispatch();

    const handleNews = () => {
        dispatch(getLatestNews());
    }

    return(
        <main>
            <LoginContainer />
            <button onClick={handleNews}>GetNews</button>
        </main>
    )
}

export default Home;