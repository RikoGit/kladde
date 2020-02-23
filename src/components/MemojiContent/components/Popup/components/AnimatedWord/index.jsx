import React from 'react';

import cn from 'classnames';
import styles from './styles.css';
import commonStyles from '../../styles.css';

const AnimatedWord = ({ word, isWin }) => (
    <span className={cn(commonStyles.text, isWin ? commonStyles.textwin : commonStyles.textloose)}>
        {Array.from(word).map((letter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span className={styles.popup__letter} key={`${letter}-${index}`}>
                {letter}
            </span>
        ))}
    </span>
);

export default AnimatedWord;
