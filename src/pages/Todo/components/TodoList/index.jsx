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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    // eslint-disable-next-line no-param-reassign
                    todo.completed = todo.id === id ? !todo.completed : todo.completed;

                    return todo;
                }),
            };
        });
    }

    render() {
        const { todos } = this.state;
        const todosItems = todos.map(todo => (
            <li key={todo.id} className={styles.list}>
                <TodoItem todo={todo} handleChange={this.handleChange} />
            </li>
        ));

        return <ul className={styles.root}>{todosItems}</ul>;
    }
}

export default TodoList;
