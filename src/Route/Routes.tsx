import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import routes from "./routesConfig";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile/Profile";

import "../Layout/Layout.css";

const Routes = () => (
  <Container className="page-container">
    <Switch>
      <Route exact path={routes.Login.url}>
        <Login />
      </Route>
      <Route exact path={routes.Dashboard.url}>
        <Dashboard />
      </Route>
      <Route exact path={routes.Profile.url}>
        <Profile />
      </Route>
    </Switch>
  </Container>
);

export default Routes;
