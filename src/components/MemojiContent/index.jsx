import React from 'react';

import Game from './components/Game/index.jsx';
import styles from './styles.css';

const MemojiContent = () => (
    <div className={styles.root}>
        <header className={styles.header}>
            <h1 className={styles.title}>Memoji</h1>
        </header>
        <Game />
    </div>
);

export default MemojiContent;
