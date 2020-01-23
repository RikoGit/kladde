import React from 'react';
import TodoItem from '../TodoItem/index.jsx';

import styles from './styles.css';

const TodoList = () => (
    <ul className={styles.root}>
        <li className={styles.list}>
            <TodoItem />
        </li>
        <li className={styles.list}>
            <TodoItem />
        </li>
        <li className={styles.list}>
            <TodoItem />
        </li>
        <li className={styles.list}>
            <TodoItem />
        </li>
    </ul>
);

export default TodoList;
