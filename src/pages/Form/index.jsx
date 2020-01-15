import React from 'react';

import styles from './styles.css';

const Form = () => (
    <section className={styles.profile}>
        <h1 className={styles.header}>Моя анкета</h1>
        <form action="#" id="profile" className={styles.form}>
            <p className={styles.form__success}>Форма заполнена правильно</p>
            <p className={styles.form__error}>Форма содержит ошибки</p>

            <label htmlFor="profile-name" className={styles.form__label}>
                Имя <span className={styles.required}>*</span>
            </label>
            <input
                name="name"
                id="profile-name"
                placeholder="Моё имя"
                data-required
                data-validator="letters"
                className={styles.form__input}
            />
            <span className={styles.form__comment}>Только буквы (русские или английские)</span>

            <label htmlFor="profile-age" className={styles.form__label}>
                Возраст
            </label>
            <input
                name="age"
                id="profile-age"
                placeholder="Мой возраст"
                data-validator="number"
                data-validator-min="0"
                data-validator-max="100"
                className={styles.form__input}
            />
            <span className={styles.form__comment}>Число от 0 до 100</span>

            <label htmlFor="profile-phone" className={styles.form__label}>
                Телефон
            </label>
            <input
                name="phone"
                id="profile-phone"
                placeholder="Мой телефон"
                data-validator="regexp"
                data-validator-pattern="^\+7\d{10}$"
                className={styles.form__input}
            />
            <span className={styles.form__comment}>В формате +71234567890</span>

            <label htmlFor="profile-number" className={styles.form__label}>
                Любимое число
            </label>
            <input
                name="number"
                id="profile-number"
                placeholder="42?"
                data-validator="number"
                className={styles.form__input}
            />

            <button type="submit" className={styles.form__button}>
                Сохранить
            </button>
        </form>
    </section>
);

export default Form;
