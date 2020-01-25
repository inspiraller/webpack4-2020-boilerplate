import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteOne from 'Routes/RouteOne';

const RouterWrapper = () => (
  <Switch>
    <Route path="/" exact component={RouteOne} key="a" />
  </Switch>
);

export default RouterWrapper;
