import { validate } from '../../utils/index.js';
import styles from './styles.css';

const addErrorClass = elem => {
    elem.classList.add(styles.input_error);
};

const removeErrorClass = elem => {
    elem.classList.remove(styles.input_error);
};

const validateForm = form => {
    const validationMessageElement = form.querySelector(`.${styles.form__text}`);
    let isFormValidClass = true;
    const inputs = form.querySelectorAll('input');
    [...inputs].map(item => {
        const isValid = validate(item.value, item.dataset);
        if (isValid) {
            removeErrorClass(item);
        } else {
            addErrorClass(item);
            isFormValidClass = false;
        }
        return undefined;
    });
    if (isFormValidClass) {
        validationMessageElement.classList.remove(styles.form__error);
        validationMessageElement.classList.add(styles.form__success);
        validationMessageElement.textContent = 'Форма заполнена правильно';
    } else {
        validationMessageElement.classList.remove(styles.form__success);
        validationMessageElement.classList.add(styles.form__error);
        validationMessageElement.textContent = 'Форма содержит ошибки';
    }
};

const submitHandler = function submitHandler(event) {
    event.preventDefault();
    validateForm(this);
};

const focusHandler = event => {
    if (event.target.tagName === 'INPUT') {
        removeErrorClass(event.target);
    }
};

const getBlurHandler = form => event => {
    if (event.target.tagName === 'INPUT') {
        validateForm(form);
    }
};

export default () => {
    const form = document.querySelector(`.${styles.form}`);

    form.addEventListener('focus', focusHandler, true);
    form.addEventListener('blur', getBlurHandler(form), true);
    form.addEventListener('submit', submitHandler);
};
