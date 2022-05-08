import React from "react";

import Portal from "../../../containers/portal/Portal";
import Button from "../../button/Button";
import './LoginModal.css';


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

const LoginModal: React.FC<propsModalWindow> = (props) => {
    return(
        <>
            { props.isOpen &&
            <Portal>
                <div className="auth-background">
                    <div className="auth-background__auth-window">
                        <Button
                            onClick={props.onClose}
                            className='btn'
                            disabled={false}
                            active={false}
                            children="Cancel"/>
                        <h2>{props.title}</h2>
                        <form>
                            <label> Login: </label>
                            <input
                                placeholder="Login"
                                type="text"
                                name="login"
                                onChange={props.handleLoginChange}
                                value={props.loginText} />
                            <label> Password: </label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={props.handlePasswordChange}
                                value={props.passwordText}/>
                            <Button
                                onClick={props.onSubmit}
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

export default LoginModal;