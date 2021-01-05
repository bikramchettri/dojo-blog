import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Name} from './Name';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Name first="Bikram" last="Chettri">
    </Name>
  </React.StrictMode>,
  document.getElementById('root')
);
