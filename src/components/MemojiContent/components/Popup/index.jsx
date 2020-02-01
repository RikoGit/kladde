import React from 'react';

import cn from 'classnames';
import AnimatedWord from './components/AnimatedWord/index.jsx';
import styles from './styles.css';

const Popup = () => (
    <div className={styles.main}>
        <h1 className={styles.title}>
            <AnimatedWord word="Win" isWin />
            <AnimatedWord word="Lose" />
        </h1>
        <div id={styles.buttonid} className={styles.button}>
            <span className={cn(styles.buttontext, styles.buttontextwin)}>Play again</span>
            <span className={cn(styles.buttontext, styles.buttontextlose)}>Try again</span>
        </div>
    </div>
);

export default Popup;
