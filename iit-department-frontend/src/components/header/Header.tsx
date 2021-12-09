import React, { Component } from "react";
import './Header.css';

class Header extends Component<any, any> {
    render() {
        return(
            <header>
                <h1>
                    <a href="#">IIT Department</a>
                </h1>
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
            </header>
        )
    }
}

export default Header;