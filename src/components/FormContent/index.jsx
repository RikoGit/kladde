import React from 'react';

import Form from './components/Form/index.jsx';
import fields from './fields.js';
import styles from './styles.css';

const numberReg = /^-?\d+$/;
const lettersReg = /^[а-яёА-ЯЁa-zA-Z]*$/;

const FormContent = () => {
    const validator = (value, options) => {
        if (options.validator === 'letters') {
            if (lettersReg.test(value)) {
                return true;
            }
            return false;
        }
        /* кусок из курса из подсказок */
        if (options.validator === 'number') {
            const min = options.validatorMin;
            const max = options.validatorMax;
            // если не число
            if (!numberReg.test(value)) {
                return false;
            }
            // если не входит в диапазон [min;max] или min или max == undefined
            if (Number(value) > max || Number(value) < min) {
                return false;
            }
        }
        /* мой код с ошибкой 
        if (elem.dataset.validator === 'number') {
            const min = elem.dataset.validatorMin ? elem.dataset.validatorMin : 0;
            const max = elem.dataset.validatorMax ? elem.dataset.validatorMax : Infinity;
            if (
                /^\d+$/.test(elem.value) &&
                Number(elem.value) >= min &&
                Number(elem.value) <= max
            ) {
                removeErrorClass(elem);
            } else addErrorClass(elem);
        }
        */
        if (options.validator === 'regexp') {
            if (new RegExp(options.validatorPattern).test(value)) {
                return true;
            }
            return false;
        }

        return true;
    };

    const validateForm = (value, options) => {
        if (value) {
            // если поле заполнено
            return validator(value, options); // запускаем валидацию
        }
        if (options.required) {
            // если не заполнено и обязательное
            return false;
        }
        return true;
    };

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <section className={styles.profile}>
                    <h1 className={styles.header}>Моя анкета</h1>
                    <Form fields={fields} validate={validateForm} />
                </section>
            </div>
        </div>
    );
};

export default FormContent;
