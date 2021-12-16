import React from "react";
import {Link} from "react-router-dom";
import './Nav.css';

const Nav: React.FC = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='library'>Library</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;