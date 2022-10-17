import { Component } from 'react';

import './Auth.css';

class Auth extends Component<any, any> {
    render() {
        return(
            <main>
                <div className="auth__container">
                    <div className="auth__info">
                        <h2 className="auth__info-label">
                            Information Intelligent Technology
                        </h2>
                        <p className="auth__info-text">
                            Мы создаём методы, средства и технологии проектирования компьютерных систем (обучающих, экспертных, консультирующих, робототехнических и др.) для решения задач, традиционно считающихся интеллектуальными.
                        </p>
                    </div>
                    <form action="" method="post" className='auth__form'>
                        <input type="email" name="email" id="" placeholder='Электронный адрес или номер телефона'/>
                        <input type="password" name="password" id="" placeholder='Пароль'/>
                        <button className="confirm__btn">Вход</button>
                        <a href="" className="forgot__btn">Забыли пароль?</a>
                        <div className="br"></div>
                        <button className="register__btn">Регистрация</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Auth;