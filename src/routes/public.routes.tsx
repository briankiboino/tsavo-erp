import React,{ Component } from "react";

import { Route } from "react-router-dom";

export const PublicRoute = (props: any) => {
  return (
    <Route {...props} exact render={(props: any) => <Component {...props} />} />
  );
};

export default PublicRoute;