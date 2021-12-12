import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component<any, any> {
    render() {
        return(
            <header>
                <h1>
                    <Link to='/'>IIT Department</Link>
                </h1>
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
                            <Link to='/post'>Post</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;