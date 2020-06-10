import React from 'react';

import styles from './styles.css';

const AnimatedWord = ({ word }) => (
    <span className={styles.root}>
        {Array.from(word).map((letter, index) => (
            <span className={styles.letter} key={`${letter}${index + 1}`}>
                {letter}
            </span>
        ))}
    </span>
);

export default AnimatedWord;
