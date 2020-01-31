import React from 'react';

import cn from 'classnames';
import styles from '../../styles.css';

const AnimatedWord = ({ word, isWin }) => (
    <span className={cn(styles.text, isWin ? styles.textwin : styles.textloose)}>
        {Array.from(word).map((letter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span className={styles.letter} key={`${letter}-${index}`}>
                {letter}
            </span>
        ))}
    </span>
);

export default AnimatedWord;
