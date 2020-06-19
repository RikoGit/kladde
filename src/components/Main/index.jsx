import React, { createElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './styles.css';
import componentsByPath from './componentsByPath.js';
import { routesForMapping } from '../../routes.js';

const Main = () => {
    return (
        <main className={styles.root}>
            <Switch>
                {routesForMapping.map(route => (
                    <Route path={`/${route.path}`} key={route.path}>
                        {createElement(componentsByPath[route.path])}
                    </Route>
                ))}
            </Switch>
        </main>
    );
};

export default Main;
