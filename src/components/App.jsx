import { hot } from 'react-hot-loader/root.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from '../../static/global.css';
import Index from '../pages/Index/index.jsx';
import MemeGenerator from '../pages/MemeGenerator/index.jsx';
import Todo from '../pages/Todo/index.jsx';
import Mult from '../pages/Mult/index.jsx';
import Harvest from '../pages/Harvest/index.jsx';
import Kittens from '../pages/Kittens/index.jsx';
import Form from '../pages/Form/index.jsx';
import VanillaForm from '../pages/VanillaForm/index.jsx';
import Memoji from '../pages/Memoji/index.jsx';
import CommonModelMemoji from '../pages/CommonModelMemoji/index.jsx';
import VanillaMemoji from '../pages/VanillaMemoji/index.jsx';

const Main = () => (
    <main className={styles.main}>
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
            <Route path="/commonmodelmemoji">
                <CommonModelMemoji />
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

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                    Главная
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/mult" className={styles.nav__link}>
                    Мультик
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/harvest" className={styles.nav__link}>
                    Бабуленькин урожай
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/kittens" className={styles.nav__link}>
                    Бабуленькины котятки
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/vanillaform" className={styles.nav__link}>
                    Проверка формы
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/form" className={styles.nav__link}>
                    Проверка формы (react)
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/vanillamemoji" className={styles.nav__link}>
                    Memoji
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/commonmodelmemoji" className={styles.nav__link}>
                    Memoji (общая модель)
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/memoji" className={styles.nav__link}>
                    Memoji (react)
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/todo" className={styles.nav__link}>
                    TODO
                </Link>
            </li>
            <li className={styles.nav__item}>
                <Link to="/memegenerator" className={styles.nav__link}>
                    Meme generator
                </Link>
            </li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <div className={styles.content}>
            <Nav />
            <Main />
        </div>
    </Router>
);

export default hot(App);
