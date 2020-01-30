import React from 'react';
import styles from './styles.css';

const TodoItem = ({ todo }) => (
    <div className={styles.root}>
        <input type="checkbox" checked={todo.completed} />
        <span>{todo.text}</span>
    </div>
);

export default TodoItem;
