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

    /*
    const todoIndex = todos.findIndex(({id}) => id === itemId);

    if (todoIndex === -1) return;
    
    const todo = todos[todoIndex];
    const newTodo = {
       ...todo,
       completed: !todo.completed,
    };
    const todos = [...todos.slice(0, findIndex), newTodo, todos.slice(todoIndex + 1);
    
    return {todos};
    */

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
