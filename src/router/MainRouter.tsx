import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from "../App";
import Library from "../containers/library/Library";
import Auth from "../containers/auth/Auth";
import Posts from "../containers/posts/Posts";
import Profile from "../containers/profile/Profile";

interface IMainRouterProps {
    auth: any,
}

const MainRouter: React.FC<IMainRouterProps> = (props) => {
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Auth />}/>
                    <Route path='/library' element={<Library />}/>
                    <Route path='/posts' element={<Posts />}/>
                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default MainRouter;