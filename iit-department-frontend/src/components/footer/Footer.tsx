import React, { Component } from "react";
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends Component<any, any> {
    render() {
        return(
            <footer>
                <h2>
                    <Link to='/'>IIT Department</Link>
                </h2>
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
            </footer>
        )
    }
}

export default Footer;