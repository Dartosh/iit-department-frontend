import React, { Component } from "react";
import './Home.css';
import AuthControl from "../auth/AuthControl"

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