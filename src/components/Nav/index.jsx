import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import routes from '../../routes.js';

const Nav = () => (
    <nav className={styles.root}>
        <ul className={styles.list}>
            {routes.map(route => (
                <li className={styles.item} key={route.path}>
                    <Link to={`/${route.path}`} className={styles.link}>
                        {route.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
