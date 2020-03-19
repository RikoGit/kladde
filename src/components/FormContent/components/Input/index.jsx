import React from 'react';
import cn from 'classnames';

import styles from '../../styles.css';

const Input = ({ name, placeholder, label, comment, handleChange, isValid }) => {
    const test = isValid ? styles.form__input : cn(styles.form__input, styles.input_error);

    return (
        <>
            <label className={styles.form__label}>
                {label}
                <input
                    name={name}
                    placeholder={placeholder}
                    className={test}
                    // onBlur={handleBlur}
                    // onFocus={handleFocus}
                    onChange={handleChange.bind(this, name)}
                    // value={valueI}
                />
            </label>
            <span className={styles.form__comment}>{comment}</span>
        </>
    );
};

/* 
this.state = {
    foo: {
        bar: 3,
        baz: 19,
    },
    quz: 8,
};

render () { 
    const fooState = this.state.foo; // { bar: 3, baz: 19 }

    fooState.bar = 10;

    this.setState({
        ...this.state,
        foo: {
            ...this.state.foo,
            bar: 10,
        },
    });
}

const Foo = () => {
    const [value, setValue] = useState(4);

    setValue(4);
}


this.setState({
    quz: 8,
})
*/

export default Input;
