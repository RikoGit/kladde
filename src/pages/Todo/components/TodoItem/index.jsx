import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const TodoItem = ({ todo, handleChange }) => {
    const classState = todo.completed ? styles.root_state_close : styles.root_state_open;

    return (
        <label className={cn(styles.root, classState)}>
            <input
                type="checkbox"
                tabIndex="0"
                checked={todo.completed}
                onChange={() => handleChange(todo.id)}
            />
            <span className={styles.text}>{todo.text}</span>
        </label>
    );
};

export default TodoItem;
