import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/HomePage';

import * as serviceWorker from './serviceWorker';

// Loading Home page in the root div for index.html
ReactDOM.render(<HomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
