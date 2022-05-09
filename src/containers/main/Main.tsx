import { Component } from "react";

import Header from '../../components/header/Header';
import Home from '../home/Home';
import Footer from '../../components/footer/Footer';
import './Main.css';

class Main extends Component<any, any> {
    render() {
        return(
            <div className='wrapper'>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Main;
