import React, { useState } from 'react';

import styles from './styles.css';

const FormContent = ({ isVanilla }) => {
    const [form, setForm] = useState({
        profileName: '',
        profileAge: 0,
        profilePhone: '',
        profileNumber: 0,
    });

    const { inputErrorClass, formValidClass, formInvalidClass } = {
        formClass: styles.form,
        formValidClass: styles.form_valid,
        formInvalidClass: styles.form_invalid,
        inputErrorClass: styles.input_error,
    };

    const addErrorClass = elem => {
        elem.classList.add(inputErrorClass);
    };

    const removeErrorClass = elem => {
        elem.classList.remove(inputErrorClass);
    };

    const validator = elem => {
        if (elem.dataset.validator === 'letters') {
            if (/^[а-яёА-ЯЁa-zA-Z]*$/.test(elem.value)) {
                removeErrorClass(elem);
            } else addErrorClass(elem);
        }
        /* кусок из курса из подсказок */
        if (elem.dataset.validator === 'number') {
            const min = elem.dataset.validatorMin;
            const max = elem.dataset.validatorMax;
            // если не число
            if (!/^-?\d+$/.test(elem.value)) {
                addErrorClass(elem);
                return;
            }
            // если не входит в диапазон [min;max] или min или max == undefined
            if (Number(elem.value) > max || Number(elem.value) < min) {
                addErrorClass(elem);
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
        if (elem.dataset.validator === 'regexp') {
            if (new RegExp(elem.dataset.validatorPattern).test(elem.value)) {
                removeErrorClass(elem);
            } else addErrorClass(elem);
        }
    };

    const validationForm = elem => {
        if (elem.value) {
            // если поле заполнено
            validator(elem); // запускаем валидацию
        } else if (elem.dataset.required) {
            // если не заполнено и обязательное
            addErrorClass(elem); // подсвечиваем красным
        }
    };

    const handleSubmit = event => {
        const { target } = event;
        event.preventDefault();
        target.classList.remove(formValidClass);
        target.classList.remove(formInvalidClass);
        let isformValidClass = true;
        const inputs = target.querySelectorAll('input');
        [].slice.call(inputs).map(input => {
            validationForm(input);
            if (input.classList.contains(inputErrorClass)) isformValidClass = false;
            return undefined;
        });
        if (isformValidClass) {
            target.classList.add(formValidClass);
        } else {
            target.classList.add(formInvalidClass);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleBlur = event => {
        const { target } = event.target;
        validationForm(target);
    };

    const handleFocus = event => {
        removeErrorClass(event.target); // ???
    };

    return (
        <section className={styles.profile}>
            <h1 className={styles.header}>Моя анкета</h1>
            <form action="#" className={styles.form} onSubmit={!isVanilla ? handleSubmit : null}>
                <p className={styles.form__success}>Форма заполнена правильно</p>
                <p className={styles.form__error}>Форма содержит ошибки</p>
                <label htmlFor="profileName" className={styles.form__label}>
                    Имя <span className={styles.required}>*</span>
                </label>
                <input
                    name="profileName"
                    placeholder="Моё имя"
                    data-required
                    data-validator="letters"
                    className={styles.form__input}
                    onBlur={!isVanilla ? handleBlur : null}
                    onFocus={!isVanilla ? handleFocus : null}
                    onChange={!isVanilla ? handleChange : null}
                />
                <span className={styles.form__comment}>Только буквы (русские или английские)</span>
                <label htmlFor="profileAge" className={styles.form__label}>
                    Возраст
                </label>
                <input
                    name="profileAge"
                    placeholder="Мой возраст"
                    data-validator="number"
                    data-validator-min="0"
                    data-validator-max="100"
                    className={styles.form__input}
                    onBlur={!isVanilla ? handleBlur : null}
                    onFocus={!isVanilla ? handleFocus : null}
                    onChange={!isVanilla ? handleChange : null}
                />
                <span className={styles.form__comment}>Число от 0 до 100</span>
                <label htmlFor="profilePhone" className={styles.form__label}>
                    Телефон
                </label>
                <input
                    name="profilePhone"
                    placeholder="Мой телефон"
                    data-validator="regexp"
                    data-validator-pattern="^\+7\d{10}$"
                    className={styles.form__input}
                    onBlur={!isVanilla ? handleBlur : null}
                    onFocus={!isVanilla ? handleFocus : null}
                    onChange={!isVanilla ? handleChange : null}
                />
                <span className={styles.form__comment}>В формате +71234567890</span>
                <label htmlFor="profileNumber" className={styles.form__label}>
                    Любимое число
                </label>
                <input
                    name="profileNumber"
                    placeholder="42?"
                    data-validator="number"
                    className={styles.form__input}
                    onBlur={!isVanilla ? handleBlur : null}
                    onFocus={!isVanilla ? handleFocus : null}
                    onChange={!isVanilla ? handleChange : null}
                />
                <button type="submit" className={styles.form__button}>
                    Сохранить
                </button>
            </form>
        </section>
    );
};

export default FormContent;
