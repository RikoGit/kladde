import React, { useEffect } from 'react';

import init from './init.js';
import styles from './styles.css';

const VanillaForm = () => {
    useEffect(init, []);

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <section className={styles.profile}>
                    <h1 className={styles.header}>Моя анкета</h1>
                    <form action="#" className={styles.form}>
                        <div className={styles.form__text} />
                        <label className={styles.form__label}>
                            Имя <span className={styles.required}>*</span>
                            <input
                                name="profileName"
                                className={styles.form__input}
                                placeholder="Моё имя"
                                data-required
                                data-validator="letters"
                            />
                        </label>
                        <span className={styles.form__comment}>
                            Только буквы (русские или английские)
                        </span>

                        <label className={styles.form__label}>
                            Возраст
                            <input
                                name="profileAge"
                                className={styles.form__input}
                                placeholder="Мой возраст"
                                data-validator="number"
                                data-validator-min="0"
                                data-validator-max="100"
                            />
                        </label>
                        <span className={styles.form__comment}>Число от 0 до 100</span>

                        <label className={styles.form__label}>
                            Телефон
                            <input
                                name="profilePhone"
                                className={styles.form__input}
                                placeholder="Мой телефон"
                                data-validator="regexp"
                                data-validator-pattern="^\+7\d{10}$"
                            />
                        </label>
                        <span className={styles.form__comment}>В формате +71234567890</span>

                        <label className={styles.form__label}>
                            Любимое число
                            <input
                                name="profileNumber"
                                className={styles.form__input}
                                placeholder="42?"
                                data-validator="number"
                            />
                        </label>

                        <button type="submit" className={styles.form__button}>
                            Сохранить
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default VanillaForm;
