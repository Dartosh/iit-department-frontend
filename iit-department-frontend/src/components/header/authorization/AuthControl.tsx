import React, { Component } from "react";
import '../Header.css';
import ModalLogin from "./ModalLogin";



type authState = {
    isLoggedIn: boolean,
    isOpen: boolean,
}
class AuthControl extends Component<any, authState> {
    state = {
        isLoggedIn: false,
        isOpen: false,
    }


    constructor(props: any) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    openModal(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({ isOpen: true });
    }

    handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
        console.log('Login function!');
        this.setState({ isOpen: false });
    }

    handleClose(e: React.MouseEvent<HTMLButtonElement>) {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    }

    render() {

        return(
            <div className="header__auth-block">
                <button className="header__auth-block__signin"
                        onClick={this.openModal} >
                    SignIn
                </button>
                <button className="header__auth-block__signup">
                    SignUp
                </button>
                <ModalLogin title="Login"
                            isOpen={this.state.isOpen}
                            onClose={this.handleClose}
                            onSubmit={this.handleLogin}
                />
            </div>
        )
    }
}

export default AuthControl;