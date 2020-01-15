import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mult from '../pages/Mult/index.jsx';
import Harvest from '../pages/Harvest/index.jsx';
import Kittens from '../pages/Kittens/index.jsx';
import Form from '../pages/Form/index.jsx';
import Memoji from '../pages/Memoji/index.jsx';

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
            <Route path="/form">
                <Form />
            </Route>
            <Route path="/kittens">
                <Kittens />
            </Route>
            <Route path="/harvest">
                <Harvest />
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
                    <Link to="/harvest">Бабуленькин урожай</Link>
                </li>
                <li>
                    <Link to="/kittens">Бабуленькины котятки</Link>
                </li>
                <li>
                    <Link to="/form">Проверка формы</Link>
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
    </Router>
);

export default hot(App);
