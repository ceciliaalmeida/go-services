import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import CreateService from './pages/CreateService';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/services" component={Services} />
        <Route path="/create-service" component={CreateService}/>
      </Switch>
  );
}