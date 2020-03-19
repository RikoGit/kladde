import React, { useState } from 'react';
// import cn from 'classnames';

import Input from '../Input/index.jsx';
import styles from './styles.css';

const Form = ({ fields, validate }) => {
    const [form, setForm] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}),
    );
    const [validation, setValidation] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {}),
    );

    // const formValidClass = styles.form_valid;
    // const formInvalidClass = styles.form_invalid;

    /* const validationForm = elem => {
        if (elem.value) {
            // если поле заполнено
            validator(elem); // запускаем валидацию
        } else if (elem.dataset.required) {
            // если не заполнено и обязательное
            // addErrorClass(elem); // подсвечиваем красным
            setState('invalid');
        }
    }; */

    const handleSubmit = event => {
        event.preventDefault();
        // setState('valid');
        const newValidation = {};
        fields.forEach(field => {
            newValidation[field.name] = validate(form[field.name], field.validateOptions);
            // if (!isValid) setState('invalid');
            // else setState('invalid');
            // return isValid;
        });
        setValidation(newValidation);
    };

    /*
    const handleBlur = function handleBlur(event) {
        const { target } = event;
        // validationForm(target);
        console.log('blur');
        console.log('this = ', this);
        setFocus(false);
    };
    */
    /* 
    const handleFocus = () => {
        setFocus(true);
        // const { target } = event;
        // removeErrorClass(target);
    };
    */

    const handleChange = (name, event) => {
        const { value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const text = '';
    /*    if (state === 'valid') {
        text = 'Форма заполнена правильно';
    } else if (state === 'invalid') text = 'Форма содержит ошибки';
    */
    const fieldsForm = fields.map(field => (
        <Input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            comment={field.comment}
            handleChange={handleChange}
            isValid={validation[field.name]}
        />
    ));

    return (
        <form action="#" className={styles.root} onSubmit={handleSubmit}>
            <div className={styles.form__text}>{text}</div>
            {fieldsForm}
            <button type="submit" className={styles.form__button}>
                Сохранить
            </button>
        </form>
    );
};

export default Form;
