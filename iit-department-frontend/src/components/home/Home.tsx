import React, { Component } from "react";
import './Home.css';
import Authorization from "../../components/header/authorization/Authorization"

class Home extends Component<any, any> {
    render() {
        return(
            <main>
                <Authorization />
            </main>
        )
    }
}

export default Home;