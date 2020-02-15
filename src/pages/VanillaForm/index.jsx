import React from 'react';

import FormContent from '../../components/FormContent/index.jsx';
import styles from '../../components/FormContent/styles.css';
import validateForm from './script.js';

class VanillaForm extends React.Component {
    componentDidMount() {
        validateForm({
            formClass: styles.form,
            formValidClass: styles.form_valid,
            formInvalidClass: styles.form_invalid,
            inputErrorClass: styles.input_error,
        });
    }

    render() {
        return <FormContent isVanilla />;
    }
}

export default VanillaForm;
