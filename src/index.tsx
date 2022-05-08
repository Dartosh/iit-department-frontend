import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Route, Routes } from 'react-router';
import Home from './containers/home/Home';
import Library from './containers/library/Library';
import Posts from './containers/posts/Posts';
import Profile from './containers/profile/Profile';
import { BrowserRouter } from 'react-router-dom';
import Post from './components/post/Post';
import { Provider } from 'react-redux';
import store from './redux/store';


const app = (
    <Provider store={store}>
        <BrowserRouter>
                <App>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/library' element={<Library />}/>
                        <Route path='/posts' element={<Posts />}/>
                        <Route path='/post' element={<Post id={''} create_date={''} user={''} text={''} comments_count={''} />}/>
                        <Route path='/profile' element={<Profile />}/>
                    </Routes>
                </App>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root')
);

reportWebVitals();
