import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WithLayout } from '../components';

import {
  Transfer,
  Settings,
  Swap,
  Mint,
  Burn,
  Dashboard,
} from '../_pages';
import {Swap2} from "../_pages/swap2";

export default function App() {
  return (
    <Router>
      <WithLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/settings" component={Settings} />
          <Route path="/swap" component={Swap} />
          <Route path="/swa9" component={Swap2} />
          <Route path="/mint" component={Mint} />
          <Route path="/burn" component={Burn} />
        </Switch>
      </WithLayout>
    </Router>
  );
}
