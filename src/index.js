import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter store = {store}>
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  </BrowserRouter>,
);
