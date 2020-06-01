import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ServiceList, ServiceForm } from "./pages/Service";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/services" component={ServiceList} isPrivate />
      <Route path="/service/new" component={ServiceForm} isPrivate />
      <Route path="/service/edit/:id" component={ServiceForm} isPrivate />
    </Switch>
  );
}
