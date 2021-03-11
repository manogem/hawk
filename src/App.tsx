import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DEFAULT_ROUTE, GLOBAL_ROUTES } from "./config/routerConfig";
import { Provider } from "react-redux";
import { store } from "./store";
import IntlProviderWrapper from "./pages/App/wrappers/IntlProviderWrapper";
import ThemeProviderWrapper from "./pages/App/wrappers/ThemeProviderWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
        <IntlProviderWrapper>
            <ThemeProviderWrapper>
                <Router>
                    <Switch>
                        {GLOBAL_ROUTES.map(
                            ({exact = false, Component, path, ...props}) =>
                                <Route
                                    exact={exact}
                                    path={path}
                                    key={path}
                                    render={(routerProps: any) =>
                                        <Component {...props} {...routerProps}/>}
                                />
                        )}
                        <Redirect from="/" to={DEFAULT_ROUTE}/>
                        <Redirect from="/auth" to={DEFAULT_ROUTE}/>
                    </Switch>
                </Router>
            </ThemeProviderWrapper>
        </IntlProviderWrapper>
    </Provider>
);

export default App;
