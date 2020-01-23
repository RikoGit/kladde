import React from 'react';
import styles from './styles.css';

const TodoItem = () => (
    <div className={styles.root}>
        <input type="checkbox" />
        <span>1</span>
    </div>
);

export default TodoItem;
