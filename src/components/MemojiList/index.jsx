import React from 'react';

import Cards from './components/Cards/index.jsx';
import styles from './styles.css';

const MemojiList = () => (
    <div className={styles.root}>
        <header className={styles.header}>
            <h1 className={styles.title}>Memoji</h1>
        </header>
        <Cards />
    </div>
);

export default MemojiList;
