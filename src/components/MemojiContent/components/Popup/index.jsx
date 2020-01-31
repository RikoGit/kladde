import React from 'react';

import cn from 'classnames';
import AnimatedWord from './components/AnimatedWord/index.jsx';
import styles from './styles.css';

/**
            <span className={cn(styles.text, styles.textwin)}>
                <span className={styles.letter}>W</span>
                <span className={styles.letter}>i</span>
                <span className={styles.letter}>n</span>
            </span>
            <span className={cn(styles.text, styles.textlose)}>
                <span className={styles.letter}>L</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>s</span>
                <span className={styles.letter}>e</span>
            </span>

*/

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
