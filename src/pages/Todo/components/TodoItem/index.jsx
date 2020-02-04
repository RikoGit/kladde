import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const TodoItem = ({ todo, handleChange }) => {
    const classState = todo.completed ? styles.root_state_close : styles.root_state_open;

    return (
        <div className={cn(styles.root, classState)}>
            <input
                type="checkbox"
                onChange={() => handleChange(todo.id)}
                checked={todo.completed}
            />
            <span className={styles.text}>{todo.text}</span>
        </div>
    );
};

export default TodoItem;
