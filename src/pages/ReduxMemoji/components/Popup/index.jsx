import cn from 'classnames';
import React from 'react';

import AnimatedWord from './components/AnimatedWord/index.jsx';
import styles from './styles.css';

const Popup = ({ state, onClick }) => {
    const rootClassName = cn(
        styles.root,
        state === 'win' || state === 'lose' ? cn(styles.state_open, styles[`state_${state}`]) : '',
    );
    const word = state === 'win' ? 'Win' : 'Lose';
    const buttonText = state === 'win' ? 'Play again' : 'Try again';

    return (
        <div className={rootClassName}>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    <AnimatedWord word={word} />
                </h1>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
                <div className={styles.button} onClick={onClick}>
                    <span className={styles.button_text}>{buttonText}</span>
                </div>
            </div>
        </div>
    );
};

export default Popup;
