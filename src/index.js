import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';



import './index.css';

import * as serviceWorker from './serviceWorker';

import Home from './screens/home/Home.js';
import About from './screens/about/About.js';




ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </React.Fragment>
    </BrowserRouter>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
