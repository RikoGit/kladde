import React from 'react';

import styles from './styles.css';

const time = new Date(0);

const Timer = ({ timerModel }) => {
    time.setTime(timerModel.timeLeft * 1000);

    return (
        <div className={styles.root}>
            {String(time.getMinutes()).padStart(2, 0)} : {String(time.getSeconds()).padStart(2, 0)}
        </div>
    );
};

export default Timer;
