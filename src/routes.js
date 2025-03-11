import React from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import { HomeIcon } from "components/Icons/Icons";

const dashRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/",
  },
];

export default dashRoutes;