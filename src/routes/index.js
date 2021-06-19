import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './config';
import AllComponents from '../views';
const CRouter = () => {

    const createMenu = (r) => {
        const Component = r.component && AllComponents[r.component];

        return (
            <Route
                key={r.key}
                path={r.key}
                render={(props) => {
                    return <Component {...props} />;
                }}
            />
        );
    };


    const createRoute = (key) => routesConfig[key].map(createMenu);
    return (
        <Switch>
            {Object.keys(routesConfig).map((key) => createRoute(key))}
            <Redirect to="admin/profit" from='/admin' exact />

        </Switch>
    );
};

export default CRouter;
