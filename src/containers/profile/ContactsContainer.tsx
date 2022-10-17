import React, { Component } from "react";

import ContactsModal from "./ContactsModal";


class ContactsContainer extends Component {
    state = {
        isOpen: false,
        fullName: 'Иван Иванов',
        mail: 'ivanivanov@mail.ru',
        phone: '+375331488228',
        telegram: 'https://t.me/ivanivanov',
        github: 'https://github.com/ivanivanov10'
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
            <div className="">
                <button onClick={this.openModal} className="profile__Btn">Контактная информация</button>
                <ContactsModal fullName={this.state.fullName}
                            mail={this.state.mail}
                            phone={this.state.phone}
                            telegram={this.state.telegram}
                            github={this.state.github}
                            isOpen={this.state.isOpen}
                            onClose={this.handleClose}
                            onSubmit={this.handleLogin} 
                            handleLoginChange={this.handleInputLoginChange}
                            handlePasswordChange={this.handleInputPasswordChange}
                />
            </div>
        )
    }
}


export default ContactsContainer;