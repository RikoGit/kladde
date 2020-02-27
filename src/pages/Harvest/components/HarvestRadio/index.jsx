import cn from 'classnames';
import React from 'react';

import styles from '../../styles.css';

const HarvestRadio = ({ id, defaultchecked }) => (
    <>
        <input
            id={`harvest-radio__${id}`}
            name="harvest-radio"
            type="radio"
            className={cn(styles['harvest-radio'], styles[`harvest-radio_type_${id}`])}
            defaultChecked={defaultchecked}
        />
        <label
            htmlFor={`harvest-radio__${id}`}
            className={cn(styles['harvest-radio'], styles[`harvest-radio_type_${id}`])}
        />
    </>
);

export default HarvestRadio;
