import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import './Nav.css';

const Nav: React.FC = () => {
    const { user } = useSelector((store: RootState) => store.user);

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
                {
                    !user && 
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                }
                {
                    !user && 
                    <li>
                        <Link to='/register'>Sign Up</Link>
                    </li>
                }
                {
                    user &&
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                }
                {
                    user &&
                    <li>
                        <Link to='/logout'>Log Out</Link>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Nav;