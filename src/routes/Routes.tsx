/* eslint-disable react/no-typos */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Dashboard } from '../Pages/Dashboard';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};