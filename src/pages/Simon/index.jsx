import React from 'react';
import { Provider } from 'react-redux';

import Game from './components/Game/index.jsx';
import store from './store.js';
import styles from './styles.css';

const Simon = () => (
    <div className={styles.root}>
        <header className={styles.header}>
            <h1 className={styles.title}>Simon The Game</h1>
        </header>
        <Provider store={store}>
            <Game />
        </Provider>
    </div>
);

export default Simon;
