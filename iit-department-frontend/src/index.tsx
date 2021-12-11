import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Library from "./components/library/Library";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Profile from "./components/profile/Profile";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render((
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/library' element={<Library />}/>
                    <Route path='/posts' element={<Posts />}/>
                    <Route path='/post' element={<Post />}/>
                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            </App>
        </BrowserRouter>
    ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
