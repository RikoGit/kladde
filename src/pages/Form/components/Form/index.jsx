import React, { useState } from 'react';
import cn from 'classnames';

import Input from '../Input/index.jsx';
import styles from './styles.css';

const Form = ({ fields, validate }) => {
    const [form, setForm] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}),
    );
    const [validation, setValidation] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {}),
    );
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isBlured, setIsBlured] = useState(false);

    const isValid = Object.values(validation).every(Boolean);

    let validationMessage = '';
    let validationClass = '';
    if (isSubmitted || isBlured) {
        validationMessage = isValid ? 'Форма заполнена правильно' : 'Форма содержит ошибки';
        validationClass = isValid ? styles.form__success : styles.form__error;
    }

    const validateForm = () => {
        const newValidation = {};
        fields.forEach(field => {
            newValidation[field.name] = validate(form[field.name], field.validateOptions);
        });
        setValidation(newValidation);
    };

    const onSubmit = event => {
        event.preventDefault();
        setIsSubmitted(true);
        validateForm();
    };

    const onBlur = () => {
        setIsBlured(true);
        validateForm();
    };

    const fieldsForm = fields.map(field => (
        <Input
            key={field.name}
            name={field.name}
            value={form[field.name]}
            placeholder={field.placeholder}
            label={
                <>
                    {field.label}{' '}
                    {field.validateOptions.required && <span className={styles.required}>*</span>}
                </>
            }
            comment={field.comment}
            onChange={value => {
                setForm({ ...form, [field.name]: value });
            }}
            onBlur={onBlur}
            isValid={validation[field.name]}
        />
    ));

    return (
        <form action="#" className={styles.root} onSubmit={onSubmit}>
            <div className={cn(styles.form__text, validationClass)}>{validationMessage}</div>
            {fieldsForm}
            <button type="submit" className={styles.form__button}>
                Сохранить
            </button>
        </form>
    );
};

export default Form;
