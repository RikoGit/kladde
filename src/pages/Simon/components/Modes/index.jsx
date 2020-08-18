import React from 'react';

import modes from './modes.js';
import styles from './styles.css';

const Modes = ({ message }) => (
    <section className={styles.info}>
        <h2 className={styles.header}>Game mode:</h2>
        <ul className={styles.modes}>
            {modes.map(mode => (
                <li className={styles.item}>
                    <label className={styles.label}>
                        <input type="radio" name="mode" />
                        {mode.text}
                    </label>
                </li>
            ))}
        </ul>
        <p className={styles.message}>{message}</p>
    </section>
);

export default Modes;
