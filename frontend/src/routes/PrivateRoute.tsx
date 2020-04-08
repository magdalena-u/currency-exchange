import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { AppState } from 'config/rootReducer';
import { routes } from './routesList';

interface PropsAuth {
    isAuthenticated: boolean;
}

interface Props {
    isAuthenticated?: boolean;
    auth: PropsAuth;
    key: string;
    exact: boolean;
    path: string;
    component: React.FC;
}

const PrivateRoute = (props: Props) => (
    <>
        {props.auth.isAuthenticated ? (
            <Route
                key={props.key}
                exact={props.exact}
                path={props.path}
                component={props.component}
            />
        ) : (
            <Redirect to={routes.auth} />
        )}
    </>
);

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);
