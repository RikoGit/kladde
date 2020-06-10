import cn from 'classnames';
import React, { createElement } from 'react';

import styles from './styles.css';

const Card = ({ as = 'div', state, name, value, onClick }) =>
    createElement(
        as,
        {
            className: cn(styles.root, styles[`card_state_${state}`]),
            onClick,
        },
        <>
            <div className={styles.card__face} aria-label={name} role="img">
                {value}
            </div>
            <div className={styles.card__back} />
        </>,
    );

export default Card;
