import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './js/App';
import pets from './config/pets.json';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <App ownerName='Bramus' petsList={pets} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
