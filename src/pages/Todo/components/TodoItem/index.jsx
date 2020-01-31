import React, { Component } from 'react';
import styles from './styles.css';

class TodoItem extends Component {
    constructor({ todo }) {
        super();
        this.todo = todo;
        this.state = { checked: todo.completed };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => {
            return {
                checked: !prevState.checked,
            };
        });
    }

    render() {
        const { checked } = this.state;
        return (
            <div className={styles.root}>
                <input type="checkbox" onChange={this.handleChange} checked={checked} />
                <span>{this.todo.text}</span>
            </div>
        );
    }
}

export default TodoItem;
