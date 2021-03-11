import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { INestedRoute } from "../../config/routerConfig";

interface AuthenticationSwitchProps {
    nestedRoutes: INestedRoute[];
}

const AuthenticationSwitchBase = ({nestedRoutes, match}: AuthenticationSwitchProps & RouteComponentProps) => (
    <Switch>
        {nestedRoutes.map(({exact = false, Component, path, ...props}) => (
            <Route
                exact={exact}
                key={path(match.url)}
                path={path(match.url)}
                render={() => <Component {...props} />}
            />
        ))}
    </Switch>
);

const AuthenticationSwitch = withRouter(AuthenticationSwitchBase);

export default AuthenticationSwitch;