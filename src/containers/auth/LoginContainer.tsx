import React, { Component } from "react";

import '../../components/header/Header.css';
import LoginModal from "../../components/auth/login/LoginModal";
import Button from "../../components/button/Button";


class LoginContainer extends Component {
    state = {
        isOpen: false,
        loginText: '',
        passwordText: '',
    }

    constructor(props: any) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
        this.handleInputLoginChange = this.handleInputLoginChange.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true, loginText: '', passwordText: ''  });
    }

    handleLogin() {
        console.log('Login function!');
        this.setState({ isOpen: false });
    }

    handleClose() {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    }

    handleInputLoginChange( e: React.ChangeEvent<HTMLInputElement> ) {
        this.setState({
            loginText: e.target.value,
        })
    }

    handleInputPasswordChange( e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            passwordText: e.target.value,
        })
    }

    render() {
        return(
            <div className="header__auth-block">
                <Button active={false}
                        disabled={false}
                        children="SignIn"
                        onClick={this.openModal}
                        className='btn'/>
                <Button active={false}
                        disabled={false}
                        children="SignUp"
                        onClick={this.openModal}
                        className='btn'/>
                <LoginModal title="Login"
                            isOpen={this.state.isOpen}
                            onClose={this.handleClose}
                            onSubmit={this.handleLogin}
                            loginText={this.state.loginText}
                            passwordText={this.state.passwordText}
                            handleLoginChange={this.handleInputLoginChange}
                            handlePasswordChange={this.handleInputPasswordChange}
                />
            </div>
        )
    }
}


export default LoginContainer;