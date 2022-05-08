import React from "react";
import { Link } from "react-router-dom";

import './Header.css';
import LoginContainer from "../../containers/auth/LoginContainer";
import Nav from "../nav/Nav";


const Header: React.FC = () => {
    return(
        <header>
            <h1>
                <Link to='/'>IIT Department</Link>
            </h1>
            <Nav />
            <LoginContainer />
        </header>
    )
}

export default Header;