import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { routesList } from './routesList';
import { colors, fontFamily } from 'styles/variables';

import { PrivateRouteContainer } from './PrivateRoute';

const GlobalStyle = createGlobalStyle`
 
    body {
        margin: 0;
        padding: 0;
        font-family: ${fontFamily.lato};
        color: ${colors.black};
        background-color: ${colors.blueGray};
    }
`;

export const Routes = () => (
    <React.Suspense fallback="loading...">
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                {routesList.map(route =>
                    route.isAuthenticated ? (
                        <PrivateRouteContainer
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ) : (
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ),
                )}
            </Switch>
        </BrowserRouter>
    </React.Suspense>
);
