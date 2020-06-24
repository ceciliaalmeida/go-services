import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import CreateService from './pages/CreateService';
import ServicePage from './pages/ServicePage';

export default function Routes() {
  return (
      <Switch>
        <RouteHandler exact path="/">
          <Home />
        </RouteHandler>
        <RouteHandler exact path="/signin">
          <SignIn />
        </RouteHandler>
        <RouteHandler exact path="/signup">
          <SignUp />
        </RouteHandler>
        <RouteHandler exact path="/services">
          <Services />
        </RouteHandler>
        <RouteHandler exact path="/services/:id">
          <ServicePage />
        </RouteHandler>
        <RouteHandler private exact path="/create-service">
          <CreateService />
        </RouteHandler>
      </Switch>
  );
}