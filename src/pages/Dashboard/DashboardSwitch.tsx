import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { INestedRoute } from "../../config/routerConfig";
import { PrivatePageWrapper } from "../../common/wrappers/PrivatePageWrapper";

interface DashboardSwitchProps {
    nestedRoutes: INestedRoute[];
}

const DashboardSwitchBase = ({nestedRoutes, match}: DashboardSwitchProps & RouteComponentProps) => (
    <PrivatePageWrapper>
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
    </PrivatePageWrapper>
);

const DashboardSwitch = withRouter(DashboardSwitchBase);

export default DashboardSwitch;