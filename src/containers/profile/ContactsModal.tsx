import React from "react";

import Portal from "../portal/Portal";
import Button from "../../components/button/Button";
import './ContactsModal.css';

import emailLogo from "../../assets/img/logo/email-logo.png"
import phoneLogo from "../../assets/img/logo/mobile-logo.png"
import telegramLogo from "../../assets/img/logo/telegram-logo.png"
import githubLogo from "../../assets/img/logo/github-logo.png"


type propsModalWindow = {
    fullName: string,
    mail: string,
    phone: string,
    telegram: string,
    github: string,
    isOpen: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ContactsModal: React.FC<propsModalWindow> = (props) => {
    return(
        <>
            { props.isOpen &&
            <Portal>
                <div className="contacts-background">
                    <div className="contacts-background__contacts-window">
                      <div className="contacts-window__header">
                        <p>{props.fullName}</p>
                        <Button
                            onClick={props.onClose}
                            className='btn'
                            disabled={false}
                            active={false}
                            children=""/>
                      </div>

                      <div className="line"></div>

                      <div className="contacts-window__main">
                        <h6>
                          Контактная информация
                        </h6>

                        <div className="contacts-window__main__item">
                          <img src={emailLogo} alt="" />
                          <div className="contacts-window__main__item__info">
                            <p className="item__info__top">
                              Электронная почта
                            </p>
                            <p className="item__info__bottom">
                              {props.mail}
                            </p>
                          </div>
                        </div>

                        <div className="contacts-window__main__item">
                          <img src={phoneLogo} alt="" />
                          <div className="contacts-window__main__item__info">
                            <p>
                              Мобильный телефон
                            </p>
                            <p>
                              {props.phone}
                            </p>
                          </div>
                        </div>

                        <div className="contacts-window__main__item">
                          <img src={telegramLogo} alt="" />
                          <div className="contacts-window__main__item__info">
                            <p>
                              Telegram
                            </p>
                            <p>
                              {props.telegram}
                            </p>
                          </div>
                        </div>

                        <div className="contacts-window__main__item">
                          <img src={githubLogo} alt="" />
                          <div className="contacts-window__main__item__info">
                            <p>
                              Github
                            </p>
                            <p>
                              {props.github}
                            </p>
                          </div>
                        </div>
                      </div>
                    
                        

                    </div>
                </div>
            </Portal>
            }
        </>
    )
}

export default ContactsModal;