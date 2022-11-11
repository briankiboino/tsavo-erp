/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Customers,
  Dashboard,
  ForgotPassword,
  SignIn,
  MyCases,
  SingleCase,
} from "../containers";
import { NotFound, InternalServerError } from "../components";
import PrivateRoute from "./private.routes";
import PublicRoute from "./public.routes";

const Routes = (props: any) => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={SignIn} />
      <PublicRoute path="/forgot-password" exact component={ForgotPassword} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute
        path="/risk-management/customers"
        exact
        component={Customers}
      />
      <PrivateRoute
        path="/risk-management/my-cases"
        exact
        component={MyCases}
      />
      <PrivateRoute
        path="/risk-management/case-management/case/:id"
        component={SingleCase}
      />
      <PublicRoute
        path="/internal-server-error"
        exact
        component={InternalServerError}
      />
      <PublicRoute path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
