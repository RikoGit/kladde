import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import HelloWorld from './HelloWorld.jsx';

const App = () => (
    <>
        <p>This is kladde!!!!!!!!!!!!kkksss</p>
        <HelloWorld
            name="foo"
            nameString={`foo ${4}`}
            number={3}
            object={{ name: 'foo', number: 3 }}
        />
    </>
);

export default hot(App);
