import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
//import store from './store';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './containers/home/Home';
import Library from "./containers/library/Library";
import Posts from "./containers/posts/Posts";
import Post from "./containers/post/Post";
import Profile from "./containers/profile/Profile";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render((
        //<Provider store={store}>
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
        //</Provider>
    ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
