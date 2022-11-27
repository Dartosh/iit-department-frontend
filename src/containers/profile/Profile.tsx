import { Component, useState } from "react";

import './Profile.css';
import ContactsContainer from "./ContactsContainer";
import profile from "../../assets/img/mock/profile.png";
import editBtn from "../../assets/img/mock/edit_button.png";
import { UserInterface } from "../../models/interfaces/user.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Profile = () => {
  // Пользователь подтягивается из стора, все поля для отрисовки брать отсюда
  const { user } = useSelector((store: RootState) => store.user);
  // Моковая группа, пока на бэке не добавят поле
  const [userGroup, setUserGroup] = useState('921702');
  // Моковая локация, пока на бэке не добавят поле
  const [userCity, setUserCity] = useState('Минск');

  return (
    <main>
        <div className="profile__container">
            <div className="profileBlock__info">
                <div className="profile__imageEdit">
                    <img src={profile} alt="Profile" className="profile__image"/>
                    <button className="profile__button__edit">
                        <img src={editBtn} alt="Edit button" className="profile__editImage"/>
                    </button>
                </div>
                <p>{user?.first_name || 'Имя не указано'}</p>
                <p>{user?.middle_name || 'Фамилия не указана'}</p>
                <p>{user?.last_name /*Отчество чаще всего не будет указано, поэтому заглушка не нужна*/}</p>
                <p>{userGroup}</p>
                <p>{userCity}</p>
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
  );
}
