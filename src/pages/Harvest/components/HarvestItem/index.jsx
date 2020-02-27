import React from 'react';

import styles from './styles.css';

const HarvestItem = ({ id, src, width, text }) => (
    <li className={styles.harvest__item}>
        <input
            id={id}
            name="harvest__checkbox"
            type="checkbox"
            className={styles.harvest__checkbox}
        />
        <label htmlFor={id} className={styles.harvest__label}>
            <img alt="" src={src} className={styles.harvest__preview} width={width} />
            <span className={styles.harvest__info}>
                <img alt="" src={src} />
                <span className={styles.harvest__text}>{text}</span>
            </span>
        </label>
        <div className={styles.harvest__photo}>
            <img alt="" src={src} />
        </div>
    </li>
);

export default HarvestItem;
