import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mult from './Mult/index.jsx';
import Memoji from './Memoji/index.jsx';

import Foo from './Foo/index.jsx';

const Test = () => (
    <div>
        <p>Test</p>
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route path="/memoji">
                <Memoji />
            </Route>
            <Route path="/mult">
                <Mult />
            </Route>
            <Route path="/">
                <Test />
            </Route>
        </Switch>
    </main>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/mult">Мультик</Link>
                </li>
                <li>
                    <Link to="/memoji">Memoji</Link>
                </li>
            </ul>
        </nav>
    </header>
);

const App = () => (
    <Router>
        <Header />
        <Main />
        <Foo />
    </Router>
);

export default hot(App);
