import React from "react";
import Portal from "./Portal";
import './ModalWindow.css';
import Button from "../../button/Button";

type propsModalWindow = {
    title: string,
    isOpen: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const ModalWindow: React.FC<propsModalWindow> = (props: propsModalWindow) => {
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
                            <input type="text" name="login"/>
                            <label> Password: </label>
                            <input type="password" name="password"/>
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

export default ModalWindow;