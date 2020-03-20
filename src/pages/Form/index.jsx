import React from 'react';

import Form from './components/Form/index.jsx';
import fields from './fields.js';
import styles from './styles.css';
import { validate } from '../../utils/index.js';

const FormPage = () => (
    <div className={styles.root}>
        <div className={styles.content}>
            <section className={styles.profile}>
                <h1 className={styles.header}>Моя анкета</h1>
                <Form fields={fields} validate={validate} />
            </section>
        </div>
    </div>
);

export default FormPage;
