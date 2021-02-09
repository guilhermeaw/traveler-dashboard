import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Cities from '../pages/Cities';
import City from '../pages/City';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cities" exact component={Cities} />
      <Route path="/cities/:id" component={City} />
    </Switch>
  );
}

export default Routes;
