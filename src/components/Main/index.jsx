import React, { createElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './styles.css';
import componentsByPath from './componentsByPath.js';
import routes from '../../routes.js';

const Main = () => {
    const sortedRoutes = [...routes];
    const emptyPathIndex = sortedRoutes.findIndex(({ path }) => path === '');

    if (emptyPathIndex !== -1) {
        const [emptyPathRoute] = sortedRoutes.splice(emptyPathIndex, 1);
        sortedRoutes.push(emptyPathRoute);
    }

    return (
        <main className={styles.root}>
            <Switch>
                {sortedRoutes.map(route => (
                    <Route path={`/${route.path}`} key={route.path}>
                        {createElement(componentsByPath[route.path])}
                    </Route>
                ))}
            </Switch>
        </main>
    );
};

export default Main;
