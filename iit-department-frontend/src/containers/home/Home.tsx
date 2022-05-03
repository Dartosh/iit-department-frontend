import React, { Component } from "react";
import './Home.css';
import LoginContainer from "../auth/LoginContainer"

class Home extends Component<any, any> {
    render() {
        return(
            <main>
                <LoginContainer />
            </main>
        )
    }
}

export default Home;