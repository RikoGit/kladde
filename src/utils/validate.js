const numberReg = /^-?\d+$/;
const lettersReg = /^[а-яёА-ЯЁa-zA-Z]*$/;

const validator = (value, options) => {
    if (options.validator === 'letters') {
        if (lettersReg.test(value)) {
            return true;
        }
        return false;
    }

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

    if (options.validator === 'regexp') {
        if (new RegExp(options.validatorPattern).test(value)) {
            return true;
        }
        return false;
    }

    return true;
};

export default (value, options) => {
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
