import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './themes/sass/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './themes/fonts/icomoon/icomoon/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
