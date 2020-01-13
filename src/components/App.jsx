import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HelloWorld from './HelloWorld.jsx';

const Test = () => (
    <div>
        <p>Test</p>
    </div>
);

const Test2 = () => (
    <div>
        <p>Test2</p>
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route path="/test2">
                <Test2 />
            </Route>
            <Route path="/" component={Test} />
        </Switch>
    </main>
);

const Header = () => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>
                <li>
                    <Link to="/test2">Test2</Link>
                </li>
            </ul>
        </nav>
    </div>
);

const App = () => (
    <Router>
        <p>This is kladde!!!!!!!!!!!!</p>
        <HelloWorld
            name="foo"
            nameString={`foo ${4}`}
            number={3}
            object={{ name: 'foo', number: 3 }}
        />
        <Header />
        <Main />
    </Router>
);

export default hot(App);
