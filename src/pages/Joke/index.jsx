import React from 'react';

function handleClick() {
    // eslint-disable-next-line no-console
    console.log('I was clicked');
}

function handleMouseOver() {
    // eslint-disable-next-line no-console
    console.log('Hovered!');
}

function Joke() {
    return (
        <div>
            <img
                src="https://www.fillmurray.com/200/100"
                alt=""
                onMouseOver={handleMouseOver()}
                onFocus={handleMouseOver()}
            />
            <br />
            <br />
            <button type="submit" onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Joke;
