import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SchoolMap from './pages/SchoolMap';

export default function Routes() {
    return (
      <BrowserRouter>
      <Switch>

      <Route path="/" exact component={Landing} />
      <Route path="/app" component={SchoolMap} />

      </Switch>
      </BrowserRouter>
    );
}