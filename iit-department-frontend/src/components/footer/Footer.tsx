import React, { Component } from "react";
import './Footer.css';

class Footer extends Component<any, any> {
    render() {
        return(
            <footer>
                <h2>
                    <a href="#">IIT Department</a>
                </h2>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#">Библиотека</a>
                        </li>
                        <li>
                            <a href="#">Информация</a>
                        </li>
                        <li>
                            <a href="#">Личное</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;