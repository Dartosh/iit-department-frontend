import { Component, useState } from "react";

import './Posts.css';
import profile from "../../assets/img/mock/profile.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Posts = () => {
  // Пользователь подтягивается из стора, все поля для отрисовки брать отсюда
  const { user } = useSelector((store: RootState) => store.user);
  // Моковая группа, пока на бэке не добавят поле
  const [userGroup, setUserGroup] = useState('921702');
  // Моковая локация, пока на бэке не добавят поле
  const [userCity, setUserCity] = useState('Минск');

  return (
    <main>
        <div className="posts__container">
            <div className="posts__userInfo">
                <div className="posts__userInfo-image">
                    <img src={ user?.avatar || profile } alt="User image" className="posts__user-image"/>
                </div>
                
                <p className="posts__userInfo-fullName">
                    { (user?.first_name ?? user?.last_name) ? (user?.first_name + ' ' + user?.last_name) : 'Иван Иванов'}
                </p>
                <p className="posts__userInfo-technology">
                    { (user?.technology) || 'Java Software Developer' }
                </p>

                <div className="br"></div>

                <p className="posts__userInfo-viewsStatistic posts__userInfo-statistic">
                    Просмотры профиля: { (user?.profile_views) || 100 }
                </p>
                <p className="posts__userInfo-contactsStatistic posts__userInfo-statistic">
                    Сеть моих контактов: { (user?.contacts_number) || 1000 }
                </p>

                <div className="br"></div>

                <a href="" className="posts__userInfo-libraryLink">Моя библиотека</a>
            </div>
            <div className="posts__postsInfo">

            </div>
        </div>
    </main>
  );
}
