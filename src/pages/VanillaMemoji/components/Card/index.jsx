import React from 'react';

import commonStyles from '../../commonStyles.css';

const Card = ({ data }) => (
    <>
        <span className={commonStyles.card__face} aria-label={data.label} role="img">
            {data.type}
        </span>
        <div className={commonStyles.card__back} />
    </>
);

export default Card;
