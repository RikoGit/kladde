import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const TodoItem = ({ todo, handleChange }) => {
    const classState = todo.completed ? styles.root_state_close : styles.root_state_open;

    return (
        <div
            className={cn(styles.root, classState)}
            onClick={() => handleChange(todo.id)}
            onKeyDown={() => handleChange(todo.id)}
            role="button"
            tabIndex="0"
        >
            <input type="checkbox" value={todo.completed} />
            <span className={styles.text}>{todo.text}</span>
        </div>
    );
};

export default TodoItem;
