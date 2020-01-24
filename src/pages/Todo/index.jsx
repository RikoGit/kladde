import React from 'react';

import TodoList from './components/TodoList/index.jsx';
import styles from './styles.css';

const Todo = () => {
    const style = {
        fontSize: 20,
    };
    const hours = new Date().getHours();
    let day;

    if (hours >= 12 && hours < 18) {
        day = 'afternoon';
        style.color = 'green';
    } else if (hours >= 18 && hours <= 23) {
        day = 'evening';
        style.color = 'blue';
    } else {
        day = 'morning';
        style.color = 'yellow';
    }

    return (
        <div className={styles.root}>
            <h1>Todo</h1>
            <p style={style}>Good {day}</p>
            <TodoList />
        </div>
    );
};

export default Todo;
