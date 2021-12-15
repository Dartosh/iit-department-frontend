import React, { Component } from "react";
import './Home.css';
import AuthControl from "../authorization/AuthControl"

class Home extends Component<any, any> {
    render() {
        return(
            <main>
                <AuthControl />
            </main>
        )
    }
}

export default Home;