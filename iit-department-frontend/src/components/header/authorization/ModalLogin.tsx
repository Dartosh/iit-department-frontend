import React, {Component} from "react";
import Portal from "./Portal";

type propsModalLogin = {
    title: string,
    isOpen: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

class ModalLogin extends Component<propsModalLogin, {}> {
    render() {
        return(
            <>
                { this.props.isOpen &&
                    <Portal>
                        <div className="auth-background">
                            <div className="auth-background__auth-window">
                                <button
                                    className="auth-background__auth-window__exit-button"
                                    onClick={this.props.onClose}
                                >Cancel</button>
                                <h2>{this.props.title}</h2>
                                <form>
                                    <label> Login: </label>
                                    <input type="text" name="login"/>
                                    <label> Password: </label>
                                    <input type="password" name="password"/>
                                    <button onClick={this.props.onSubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </Portal>
                }
            </>
        )
    }
}

export default ModalLogin;