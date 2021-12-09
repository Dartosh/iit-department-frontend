import React, { Component, Fragment } from "react";
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import './Home.css';

class Home extends Component<any, any> {
    render() {
        return(
            <div className='wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Home;
