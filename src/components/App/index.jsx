import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './styles.css';
import Main from '../Main/index.jsx';
import Nav from '../Nav/index.jsx';

const App = () => (
    <Router>
        <div className={styles.content}>
            <Nav />
            <Main />
        </div>
    </Router>
);

export default hot(App);
