import React, {Component} from "react";
import Portal from "./Portal";
import './ModalWindow.css';
import Button from "../../components/button/Button";

type propsModalWindow = {
    title: string,
    loginText: string,
    passwordText: string,
    isOpen: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

type stateModalWindow = {
    result: any;
}

class ModalWindow extends Component<propsModalWindow, stateModalWindow>{
    state = {
        result: null,
    }


    render() {
        return(
            <>
                { this.props.isOpen &&
                <Portal>
                    <div className="auth-background">
                        <div className="auth-background__auth-window">
                            <Button
                                onClick={this.props.onClose}
                                className='btn'
                                disabled={false}
                                active={false}
                                children="Cancel"/>
                            <h2>{this.props.title}</h2>
                            <form>
                                <label> Login: </label>
                                <input
                                    placeholder="Login"
                                    type="text"
                                    name="login"
                                    onChange={this.props.handleLoginChange}
                                    value={this.props.loginText} />
                                <label> Password: </label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.props.handlePasswordChange}
                                    value={this.props.passwordText}/>
                                <Button
                                    onClick={this.props.onSubmit}
                                    className='btn'
                                    disabled={false}
                                    active={false}
                                    children="Submit"/>
                            </form>

                        </div>
                    </div>
                </Portal>
                }
            </>
        )
    }
}

export default ModalWindow;