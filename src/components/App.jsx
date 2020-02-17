import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from '../pages/Index/index.jsx';
import MemeGenerator from '../pages/MemeGenerator/index.jsx';
import Todo from '../pages/Todo/index.jsx';
import Mult from '../pages/Mult/index.jsx';
import Harvest from '../pages/Harvest/index.jsx';
import Kittens from '../pages/Kittens/index.jsx';
import Form from '../pages/Form/index.jsx';
import VanillaForm from '../pages/VanillaForm/index.jsx';
import Memoji from '../pages/Memoji/index.jsx';
import VanillaMemoji from '../pages/VanillaMemoji/index.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route path="/memegenerator">
                <MemeGenerator />
            </Route>
            <Route path="/todo">
                <Todo />
            </Route>
            <Route path="/memoji">
                <Memoji />
            </Route>
            <Route path="/vanillamemoji">
                <VanillaMemoji />
            </Route>
            <Route path="/form">
                <Form />
            </Route>
            <Route path="/vanillaform">
                <VanillaForm />
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
                <Index />
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
                    <Link to="/vanillaform">Проверка формы</Link>
                </li>
                <li>
                    <Link to="/form">Проверка формы (react)</Link>
                </li>
                <li>
                    <Link to="/vanillamemoji">Memoji</Link>
                </li>
                <li>
                    <Link to="/memoji">Memoji (react)</Link>
                </li>
                <li>
                    <Link to="/todo">TODO</Link>
                </li>
                <li>
                    <Link to="/memegenerator">Meme generator</Link>
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
