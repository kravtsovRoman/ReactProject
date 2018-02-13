import React from 'react';
import {Route} from 'react-router';
import HomePage from './home.js';

export default (
    <Route>
        <Route component={HomePage} path={HomePage.path} />
    </Route>
);

