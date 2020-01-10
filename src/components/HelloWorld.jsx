import React from 'react';

const HelloWorld = ({ name, number, object }) => (
    <>
        <p>HelloWorld!</p>
        <p>
            name = {name} typeof = {typeof name};
        </p>
        <p>
            number = {number} typeof = {typeof number}
        </p>
        <pre>
            object = {JSON.stringify(object, null, 2)} typeof = {typeof object}
        </pre>
    </>
);

export default HelloWorld;
