import React, { Component } from "react";


interface IAuthContext {
    isAuth: boolean,
    toggleAuth: () => void,
}

const AuthContext = React.createContext<IAuthContext>({
    isAuth: false,
    toggleAuth: () => {},
})

class Login extends Component<any, any> {
    static contextType = AuthContext;
    context!: React.ContextType<typeof AuthContext>;

    render() {
        const { toggleAuth, isAuth } = this.context;

        return(
            <button onClick={toggleAuth}>
                {!isAuth ? 'LogIn' : 'LogOut'}
            </button>
        )
    }
}

const Profile: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
        {({ isAuth }: IAuthContext) => (
            <h1>{!isAuth ? 'LogIn' : 'Profile'}</h1>
        )}
    </AuthContext.Consumer>
)

class Authorization extends Component<{}, { isAuth: boolean }> {
    readonly state = {
        isAuth: false,
    };

    toggleAuth = () => {
        this.setState(({ isAuth }) => ({
            isAuth: !isAuth
        }));
    };

    render() {
        const { isAuth } = this.state;
        const context: IAuthContext = { isAuth, toggleAuth: this.toggleAuth };

        return(
            <AuthContext.Provider value={{ isAuth, toggleAuth: this.toggleAuth }}>
                <Login />
                <Profile />
            </AuthContext.Provider>
        );
    }

}

export default Authorization;