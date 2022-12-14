import { Component, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import './Profile.css';
import ContactsContainer from "./ContactsContainer";
import userLogo from "../../assets/img/mock/profile.png";
import avatar from "../../assets/img/mock/avatar.png";
import emailLogo from "../../assets/img/logo/email-logo.png"
import phoneLogo from "../../assets/img/logo/mobile-logo.png"
import githubLogo from "../../assets/img/logo/github-logo.png"
import pythonLogo from "../../assets/img/logo/python.png"
import dockerLogo from "../../assets/img/logo/docker.png"
import jsLogo from "../../assets/img/logo/javascript.png"
import msqlLogo from "../../assets/img/logo/mySQL.png"
import mongoLogo from "../../assets/img/logo/mongoDB.png"
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
                <button className="profile__button__edit">
                    <img src={editBtn} alt="Edit button" className="profile__editImage"/>
                </button>
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
                    <div className="profileBlock__info-stats-contacts">
                        <p>Contact information</p>
                        <div className="profileBlock__info-stats-contacts_email profile-contact">
                            <img src={emailLogo} alt="" />
                            <p>{user?.email || 'memes-kekes@sobaka.ya'} &nbsp;</p>
                        </div>
                        <div className="profileBlock__info-stats-contacts_document profile-contact">
                            <img src={phoneLogo} alt="" />
                            <p>{user?.phone || '+88005553535'} &nbsp;</p>
                        </div>
                        <div className="profileBlock__info-stats-contacts_github profile-contact">
                            <img src={githubLogo} alt="" />
                            <p>{user?.github || '@sobaka'} &nbsp;</p>
                        </div>
                    </div>

                    <div className="profileBlock__info-stats-technologies">
                        <p>Technologies</p>
                        <div className="profileBlock__info-stats-technologies-stack">
                            <img src={pythonLogo} alt="" />
                            <img src={dockerLogo} alt="" />
                            <img src={jsLogo} alt="" />
                            <img src={msqlLogo} alt="" />
                            <img src={mongoLogo} alt="" />
                        </div>
                    </div>

                    <div className="profileBlock__info-stats-followers">
                        <p>Followers</p>
                        <div className="profileBlock__info-stats-followers-list">
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Maria</p>
                            </div>
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Andrei</p>
                            </div>
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Yauhen</p>
                            </div>
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Anton</p>
                            </div>
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Igor</p>
                            </div>
                            <div className="profileBlock__follower-user">
                                <img src={userLogo} alt="" />
                                <p>Semen</p>
                            </div>
                        </div>
                    </div>

                    <div className="profileBlock__info-stats-following">
                        <p>Following</p>
                        <div className="profileBlock__info-stats-followings-list">
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Maria</p>
                            </div>
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Andrei</p>
                            </div>
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Yauhen</p>
                            </div>
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Anton</p>
                            </div>
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Igor</p>
                            </div>
                            <div className="profileBlock__following-user">
                                <img src={userLogo} alt="" />
                                <p>Semen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
