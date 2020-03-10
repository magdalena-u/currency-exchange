import React from "react";

export const routesList = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() => import("../pages/index"))
  },
  {
    exact: true,
    path: "/auth",
    isAuthenticated: false,
    component: React.lazy(() => import("../pages/auth"))
  }
];
