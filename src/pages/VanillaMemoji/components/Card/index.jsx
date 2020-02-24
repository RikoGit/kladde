import React, { createElement } from 'react';

import commonStyles from '../../styles.css';

const Card = ({ as = 'div', className, index, label, type }) =>
    createElement(
        as,
        {
            className,
            'data-index': index + 1,
            'data-type': type,
        },
        <>
            <span className={commonStyles.card__face} aria-label={label} role="img">
                {type}
            </span>
            <div className={commonStyles.card__back} />
        </>,
    );

export default Card;
