import React from 'react';

import styles from './styles.css';

const MemojiWrapper = ({ children }) => (
    <div className={styles.root}>
        <header className={styles.header}>
            <h1 className={styles.title}>Memoji</h1>
        </header>
        {children}
    </div>
);

export default MemojiWrapper;
