import { Component, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import './Profile.css';
import ContactsContainer from "./ContactsContainer";
import avatar from "../../assets/img/mock/avatar.png";
import editBtn from "../../assets/img/mock/edit_button.png";
import { UserInterface } from "../../models/interfaces/user.interface";
import { RootState } from "../../redux/store";

export const Profile = () => {
  const navigate = useNavigate();
  // Пользователь подтягивается из стора, все поля для отрисовки брать отсюда
  const { user } = useSelector((store: RootState) => store.user);
  // Моковая группа, пока на бэке не добавят поле
  const [userGroup, setUserGroup] = useState('921702');
  // Моковая локация, пока на бэке не добавят поле
  const [userCity, setUserCity] = useState('Минск');

  return (
    <main>
        <div className="profile__container">
            <div className="profileBlock__header">
                <img src={avatar} alt="User profile image" className="profileBlock__header-img" />
            </div>
            <div className="profileBlock__info">
                <div className="profileBlock__info-posts">
                    <div className="profileBlock__info-about">
                        <div className="profileBlock__info-about-follow">
                            <div className="profileBlock__fullname">
                                <p>{user?.first_name || 'Имя не указано '} &nbsp;</p>
                                <p>{user?.middle_name || ''} &nbsp;</p>
                                <p>{user?.last_name /*Отчество чаще всего не будет указано, поэтому заглушка не нужна*/}</p>
                            </div>
                            <button className="profileBlock__info-about-followBtn">Follow</button>
                        </div>

                        <p className="profileBlock__info-aboutArea">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid doloribus eius consectetur dignissimos porro sint omnis, consequuntur quaerat debitis! Quos quasi consequatur facilis obcaecati nemo, laudantium nostrum fugiat vero?
                        </p>

                        <div className="profileBlock__info-about-follows">
                            <p>{user?.following || 0} Following</p>
                            <p>{user?.followers || 0} Followers</p>
                        </div>
                    </div>

                    <div className="profileBlock__posts-item">
                        <div className="profileBlock__posts-item-header">
                            <img src={avatar} alt="User profile image" className="profileBlock__posts-item-img" />
                            <div className="profileBlock__posts-item-header-userInfo">
                                <p>{ (user?.first_name && user?.middle_name) ? user?.first_name + ' ' + user?.middle_name : 'Имя не указано' }</p>
                                <p>Student</p>
                                <p>1 day ago</p>
                            </div>
                        </div>
                        <div className="profileBlock__posts-item-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod magnam minus voluptatibus voluptatem cumque similique nobis quibusdam nihil veritatis! Ab recusandae nesciunt doloremque veritatis harum minima ea numquam iure sed.
                        </div>
                    </div>

                    <div className="profileBlock__posts-item">
                        <div className="profileBlock__posts-item-header">
                            <img src={avatar} alt="User profile image" className="profileBlock__posts-item-img" />
                            <div className="profileBlock__posts-item-header-userInfo">
                                <p>{ (user?.first_name && user?.middle_name) ? user?.first_name + ' ' + user?.middle_name : 'Имя не указано' }</p>
                                <p>Student</p>
                                <p>1 day ago</p>
                            </div>
                        </div>
                        <div className="profileBlock__posts-item-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod magnam minus voluptatibus voluptatem cumque similique nobis quibusdam nihil veritatis! Ab recusandae nesciunt doloremque veritatis harum minima ea numquam iure sed.
                        </div>
                    </div>
                </div>
                <div className="profileBlock__info-stats">

                </div>
            </div>
        </div>
    </main>
  );
}
