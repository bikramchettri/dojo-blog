import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Name as Nam} from './Name';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nam first="Bikram" last="Chettri">
    </Nam>
  </React.StrictMode>,
  document.getElementById('root')
);
