import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const JSX= 
<React.StrictMode>
<App />
</React.StrictMode>

const getItem=document.getElementById('root');

ReactDOM.render(JSX, getItem);

reportWebVitals();
