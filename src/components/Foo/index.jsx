import cn from 'classnames';
import React from 'react';

import styles from './styles.css';

const Foo = () => (
    <div className={styles.root}>
        <span>Hello from Foo!</span>
        <p className={styles.content}>Hello everybody!</p>
        <div className={cn(styles.bar, styles.baz)}>Element with few classes</div>
    </div>
);

export default Foo;
