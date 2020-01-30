import React, { Component } from 'react';

import todosData from './todosData.js';
import TodoItem from '../TodoItem/index.jsx';

import styles from './styles.css';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData,
        };
    }

    render() {
        const { todos } = this.state;
        const todosItems = todos.map(todo => (
            <li key={todo.id} className={styles.list}>
                <TodoItem todo={todo} />
            </li>
        ));

        return <ul className={styles.root}>{todosItems}</ul>;
    }
}

export default TodoList;
