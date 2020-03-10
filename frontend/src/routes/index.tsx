import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { routesList } from "./routesList";

export const Routes = () => (
  <React.Suspense fallback="loading...">
    <BrowserRouter>
      <Switch>
        {routesList.map(route => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);
