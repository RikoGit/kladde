import React from 'react';

const Todo = () => {
    const firstName = 'Bob';
    const lastName = 'Ziroll';

    return (
        <div>
            <h1>
                Todo {firstName} {lastName}
            </h1>
            <form>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <span>1</span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>2</span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>3</span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span>4</span>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default Todo;
