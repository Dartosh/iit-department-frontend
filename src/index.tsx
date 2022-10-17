import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Route, Routes } from 'react-router';
import Auth from './containers/auth/Auth';
import Library from './containers/library/Library';
import Posts from './containers/posts/Posts';
import Profile from './containers/profile/Profile';
import { BrowserRouter } from 'react-router-dom';


const app = (
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
);

ReactDOM.render(app, document.getElementById('root')
);

reportWebVitals();
