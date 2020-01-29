const validateForm = obj => {
    const { inputErrorClass, formValidClass, formInvalidClass } = obj;

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
        /* кусок из курса из подсказок */
        if (elem.value) {
            // если поле заполнено
            validator(elem); // запускаем валидацию
        } else if (elem.dataset.required === '') {
            // если не заполнено и обязательное
            addErrorClass(elem); // подсвечиваем красным
        }
        /* мой код с ошибкой 
        if (elem.dataset.required === '') {
            if (elem.value) {
                removeErrorClass(elem);
            } else {
                addErrorClass(elem);
                return;
            }
        }
        if (elem.dataset.validator) {
            validator(elem);
        } */
    };

    function submitHandler(event) {
        event.preventDefault();
        this.classList.remove(formValidClass);
        this.classList.remove(formInvalidClass);
        let isformValidClass = true;
        const inputs = this.querySelectorAll('input');
        [].slice.call(inputs).map(item => {
            validationForm(item);
            if (item.classList.contains(inputErrorClass)) isformValidClass = false;
            return undefined;
        });
        if (isformValidClass) {
            this.classList.add(formValidClass);
        } else {
            this.classList.add(formInvalidClass);
        }
    }

    const focusHandler = event => {
        if (event.target.tagName === 'INPUT') {
            removeErrorClass(event.target);
        }
    };

    const blurHandler = event => {
        if (event.target.tagName === 'INPUT') {
            validationForm(event.target);
        }
    };

    const form = document.querySelector(`.${obj.formClass}`);

    form.addEventListener('focus', focusHandler, true);
    form.addEventListener('blur', blurHandler, true);
    form.addEventListener('submit', submitHandler);
};

export default validateForm;
