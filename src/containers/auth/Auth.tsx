import { Component, useState } from 'react';
import { Navigate } from 'react-router';

import { useAppDipatch, useAppSelector } from '../../hooks/redux';
import { fetchTokens } from '../../redux/actions/tokensActions';

import './Auth.css';

const Auth = () => {
  const dipatch = useAppDipatch();
  const { error, isLoading, tokens } = useAppSelector(state => state.tokens);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dipatch(fetchTokens(login, password));
  };

  return(
      <>
        {tokens ? <Navigate to="/profile" replace /> : ''}
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
                <form className='auth__form'>
                <input
                    // type="email"
                    name="email"
                    placeholder='Номер зачётки'
                    onChange={onLoginChange}
                    value={login}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Пароль'
                    onChange={onPasswordChange}
                    value={password}
                />
                <button
                    className="confirm__btn"
                    onClick={onLogin}
                >Вход</button>
                {error ? <p className='auth__form__error-message'>Неверный логин или пароль</p> : ''}
                <a href="" className="forgot__btn">Забыли пароль?</a>
                <div className="br"></div>
                <button className="register__btn">Регистрация</button>
                </form>
            </div>
        </main>
      </>
  )
}

export default Auth;