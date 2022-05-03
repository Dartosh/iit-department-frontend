import React, { Component } from "react";
import './Footer.css';
import {Link} from "react-router-dom";
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