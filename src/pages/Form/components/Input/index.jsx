import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const getOnChangeHandler = onChange => event => onChange(event.target.value.trim());

const Input = ({ name, value, placeholder, label, comment, onChange, onBlur, isValid }) => (
    <>
        <label className={styles.form__label}>
            {label}
            <input
                name={name}
                placeholder={placeholder}
                className={cn(styles.form__input, isValid || styles.input_error)}
                onBlur={onBlur}
                onChange={getOnChangeHandler(onChange)}
                value={value}
            />
        </label>
        <span className={styles.form__comment}>{comment}</span>
    </>
);

export default Input;
