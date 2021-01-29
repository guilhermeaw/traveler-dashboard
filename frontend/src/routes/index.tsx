import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Cities from '../pages/Cities';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cities" component={Cities} />
    </Switch>
  );
}

export default Routes;
