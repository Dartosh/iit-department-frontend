import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { setupStore } from './redux/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
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

reportWebVitals();
