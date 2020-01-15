import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const test = cn(styles.card, styles.card_state_close);

const Memoji = () => (
    <div>
        <header>
            <h1 className={styles.title}>Memoji</h1>
        </header>
        <div className={styles.content}>
            <ul id="cards" className={styles.cards}>
                <li className={test} data-index="1" data-type="🐶">
                    <span className={styles.card__face} aria-label="dog" role="img">
                        🐶
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="2" data-type="🐞">
                    <span className={styles.card__face} aria-label="ladybug" role="img">
                        🐞
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="3" data-type="🐟">
                    <span className={styles.card__face} aria-label="fish" role="img">
                        🐟
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="4" data-type="🐸">
                    <span className={styles.card__face} aria-label="frog" role="img">
                        🐸
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="5" data-type="🐼">
                    <span className={styles.card__face} aria-label="panda" role="img">
                        🐼
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="6" data-type="🦄">
                    <span className={styles.card__face} aria-label="unicorn" role="img">
                        🦄
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="7" data-type="🐟">
                    <span className={styles.card__face} aria-label="fish" role="img">
                        🐟
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="8" data-type="🐼">
                    <span className={styles.card__face} aria-label="panda" role="img">
                        🐼
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="9" data-type="🦄">
                    <span className={styles.card__face} aria-label="unicorn" role="img">
                        🦄
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="10" data-type="🐶">
                    <span className={styles.card__face} aria-label="dog" role="img">
                        🐶
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="11" data-type="🐞">
                    <span className={styles.card__face} aria-label="ladybug" role="img">
                        🐞
                    </span>
                    <div className={styles.card__back} />
                </li>
                <li className={test} data-index="12" data-type="🐸">
                    <span className={styles.card__face} aria-label="frog" role="img">
                        🐸
                    </span>
                    <div className={styles.card__back} />
                </li>
            </ul>
        </div>
    </div>
);

export default Memoji;
