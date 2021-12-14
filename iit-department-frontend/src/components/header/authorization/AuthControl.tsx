import React, { Component } from "react";
import '../Header.css';
import ModalWindow from "./ModalWindow";
import Button from "../../button/Button";


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

    openModal() {
        this.setState({ isOpen: true });
    }

    handleLogin() {
        console.log('Login function!');
        this.setState({ isOpen: false });
    }

    handleClose() {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
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
                <ModalWindow title="Login"
                             isOpen={this.state.isOpen}
                             onClose={this.handleClose}
                             onSubmit={this.handleLogin}
                />
            </div>
        )
    }
}

export default AuthControl;