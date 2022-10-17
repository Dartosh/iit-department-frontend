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
  <Provider store={ store }>

  </Provider>
);

reportWebVitals();
