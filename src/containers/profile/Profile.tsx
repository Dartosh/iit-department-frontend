import { Component } from "react";

import './Profile.css';
import ContactsContainer from "./ContactsContainer";
import profile from "../../assets/img/mock/profile.png";
import editBtn from "../../assets/img/mock/edit_button.png";

const FULL_NAME = 'Иван Иванов'
const GROUP_NUMBER = 123456
const SEX = 'male'
const CITY = 'Минск'
const COUNTRY = 'Республика Беларусь'

class Profile extends Component<any, any> {
    render() {
        const fullName = <h3>{FULL_NAME}</h3>;
        let group;
        if (SEX === 'male') {
            group = <p>Студент гр. {GROUP_NUMBER}</p>;
        } else {
            group = <p>Студентка гр. {GROUP_NUMBER}</p>;
        }
        const location = <p>{CITY}, {COUNTRY}</p>;
        
        return(
            <main>
                <div className="profile__container">
                    <div className="profileBlock__info">
                        <div className="profile__imageEdit">
                            <img src={profile} alt="Profile" className="profile__image"/>
                            <button className="profile__button__edit">
                                <img src={editBtn} alt="Edit button" className="profile__editImage"/>
                            </button>  
                        </div>

                        {fullName}
                        {group}
                        {location}

                        <div className="profile__contactInfo">
                            <ContactsContainer /> 
                            {/* <button className="profile__Btn"> 
                                Контактная информация
                            </button> */}

                            <button className="profile__Btn">
                                Изменить информацию о себе
                            </button>

                        </div>
                    </div>

                    <div className="profileBlock__actions">
                        <div className="profile__actionsHeader">
                            <h4>
                                Мои действия
                            </h4>
                            <button className="profile__Btn">
                                Новая публикация
                            </button>
                        </div>
                        <h5>В последнее время вы не разместили ни одной публикации</h5>
                        <p>Недавние публикации, которыми вы поделились или прокомментировали, будут отображаться здесь</p>
                        <div id="posts_container"></div>
                    </div>


                </div>

            </main>
        )
    }
}

export default Profile;