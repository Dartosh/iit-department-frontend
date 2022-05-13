import React, { Component, useState } from "react";

import '../../components/header/Header.css';
import LoginModal from "../../components/auth/login/LoginModal";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import { getUserJwt } from "../../redux/actions/actionCreator";


// class LoginContainer extends Component {
//     state = {
//         isOpen: false,
//         loginText: '',
//         passwordText: '',
//     }

//     constructor(props: any) {
//         super(props);
//         this.openModal = this.openModal.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//         this.handleLogin = this.handleLogin.bind(this);
//         this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
//         this.handleInputLoginChange = this.handleInputLoginChange.bind(this);
//     }

//     openModal() {
//         this.setState({ isOpen: true, loginText: '', passwordText: ''  });
//     }

//     handleLogin() {
//         const { loginText, passwordText } = this.state;
//         this.setState({ isOpen: false });
//     }

//     handleClose() {
//         console.log('Cancel function!');
//         this.setState({ isOpen: false });
//     }

//     handleInputLoginChange( e: React.ChangeEvent<HTMLInputElement> ) {
//         this.setState({
//             loginText: e.target.value,
//         })
//     }

//     handleInputPasswordChange( e: React.ChangeEvent<HTMLInputElement>) {
//         this.setState({
//             passwordText: e.target.value,
//         })
//     }

//     render() {
//         return(
//             <div className="header__auth-block">
//                 <Button active={false}
//                         disabled={false}
//                         children="SignIn"
//                         onClick={this.openModal}
//                         className='btn'/>
//                 <Button active={false}
//                         disabled={false}
//                         children="SignUp"
//                         onClick={this.openModal}
//                         className='btn'/>
//                 <LoginModal title="Login"
//                             isOpen={this.state.isOpen}
//                             onClose={this.handleClose}
//                             onSubmit={this.handleLogin}
//                             loginText={this.state.loginText}
//                             passwordText={this.state.passwordText}
//                             handleLoginChange={this.handleInputLoginChange}
//                             handlePasswordChange={this.handleInputPasswordChange}
//                 />
//             </div>
//         )
//     }
// }

const LoginContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginText, setLoginText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const dispatch = useDispatch();

    const openModal = () => {
        setIsOpen(true)
        setLoginText('');
        setPasswordText('');
    }

    const handleLogin = () => {
        dispatch(getUserJwt());
        setIsOpen(false);
    }

    const handleClose = () => {
        setIsOpen(true);
    }

    const handleInputLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginText(e.target.value);
    }

    const handleInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordText(e.target.value);
    }

    return(
        <div className="header__auth-block">
            <Button active={false}
                    disabled={false}
                    children="SignIn"
                    onClick={openModal}
                    className='btn'/>
            <Button active={false}
                    disabled={false}
                    children="SignUp"
                    onClick={openModal}
                    className='btn'/>
            <LoginModal title="Login"
                        isOpen={isOpen}
                        onClose={handleClose}
                        onSubmit={handleLogin}
                        loginText={loginText}
                        passwordText={passwordText}
                        handleLoginChange={handleInputLoginChange}
                        handlePasswordChange={handleInputPasswordChange}
            />
        </div>
    )
}


export default LoginContainer;