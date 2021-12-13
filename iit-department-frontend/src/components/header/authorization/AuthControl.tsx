import React, { Component } from "react";
import ReactDOM from "react-dom";


type PortalProps = {
    children: React.ReactNode;
}
class portalLogin extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement('div')

    public componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    public render(): React.ReactElement<PortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

const LoginButton: React.FC = () => {
    return(
        <button className="header__auth-block__signin">
            SignIn
        </button>
    )
}
const LogoutButton: React.FC = () => {
    return(
        <button className="header__auth-block__signin">
            SignOut
        </button>
    )
}
const SignupButton: React.FC = () => {
    return(
        <button className="header__auth-block__signup">
            SignUp
        </button>
    )
}

type authState = {
    isLoggedIn: boolean,
}
class AuthControl extends Component<any, authState> {
    state = {
        isLoggedIn: false,
    }

    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }


    handleLoginClick(e: any): void {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(e: any): void {
        this.setState({isLoggedIn: false});
    }

    render() {

        return(
            <div className="header__auth-block">
                <LoginButton />
                <SignupButton />
            </div>
        )
    }
}

export default AuthControl;