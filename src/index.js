import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import store from './store';

ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
