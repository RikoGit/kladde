import React from 'react';
import cn from 'classnames';

import styles from '../../styles.css';

const Input = ({ name, value, placeholder, label, comment, onChange, onBlur, isValid }) => (
    <>
        <label className={styles.form__label}>
            {label}
            <input
                name={name}
                placeholder={placeholder}
                className={cn(styles.form__input, isValid || styles.input_error)}
                onBlur={onBlur}
                onChange={event => onChange(event.target.value.trim())}
                value={value}
            />
        </label>
        <span className={styles.form__comment}>{comment}</span>
    </>
);

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
