import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import {HomePage, HomeRoutes} from './pages/home';

export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={HomePage} />
        {HomeRoutes}
    </Route>
);
