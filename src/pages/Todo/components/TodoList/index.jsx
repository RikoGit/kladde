import React, { useState } from 'react';

import todosData from './todosData.js';
import TodoItem from '../TodoItem/index.jsx';

import styles from './styles.css';

const TodoList = () => {
    const [todos, setTodos] = useState(todosData);

    const handleChange = id => {
        setTodos(
            todos.map(todo => {
                // eslint-disable-next-line no-param-reassign
                todo.completed = todo.id === id ? !todo.completed : todo.completed;
                return todo;
            }),
        );
    };

    const todosItems = todos.map(todo => (
        <li key={todo.id} className={styles.list}>
            <TodoItem todo={todo} handleChange={handleChange} />
        </li>
    ));

    return <ul className={styles.root}>{todosItems}</ul>;
};

export default TodoList;
