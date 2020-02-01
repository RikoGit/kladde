import React from 'react';

import styles from './styles.css';

const TodoItem = ({ todo, handleChange }) => (
    <div className={styles.root}>
        <input type="checkbox" onChange={() => handleChange(todo.id)} checked={todo.completed} />
        <span>{todo.text}</span>
    </div>
);

export default TodoItem;
