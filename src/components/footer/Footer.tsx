import React from "react";
import {Link} from "react-router-dom";

import './Footer.css';
import Nav from "../nav/Nav";

const Footer: React.FC = () => {
    return(
        <footer>
            <h2>
                <Link to='/'>IIT Department</Link>
            </h2>
            <Nav />
        </footer>
    )
}

export default Footer;