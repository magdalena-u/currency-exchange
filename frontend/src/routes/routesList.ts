import React from 'react';

export const routesList = [
    {
        exact: true,
        path: '/auth',
        component: React.lazy(() => import('../pages/auth')),
    },
    {
        exact: true,
        path: '/',
        component: React.lazy(() => import('../pages/index')),
        isAuthenticated: true,
    },
];

export const routes = {
    auth: '/auth',
};
