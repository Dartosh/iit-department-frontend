import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Library from './containers/library/Library';
import Auth from './containers/auth/Auth';
import { Profile } from './containers/profile/Profile';
import Posts from './containers/posts/Posts';
import { setupStore } from './redux/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App>
          <Routes>
              <Route path='/' element={<Auth />}/>
              <Route path='/library' element={<Library />}/>
              <Route path='/posts' element={<Posts />}/>
              <Route path='/profile' element={<Profile />}/>
          </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
