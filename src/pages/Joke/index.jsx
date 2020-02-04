import React, { Component } from 'react';

class Joke extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged,
        }));
    }

    render() {
        const { isLogged } = this.state;
        const text = isLogged ? 'Logged in' : 'Logged out';
        const buttonText = isLogged ? 'LOG OUT' : 'LOG IN';

        return (
            <div>
                <h1>{text}</h1>
                <h3>Кнопка button</h3>
                <button type="button" onClick={this.handleClick}>
                    {buttonText}
                </button>
                <h3>Кнопка input</h3>
                <input type="button" onClick={this.handleClick} value={buttonText} />
            </div>
        );
    }
}

export default Joke;
