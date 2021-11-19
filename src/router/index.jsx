import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Dashboard
} from '../screens';

let publicRoutes =  [
    {
      path: '/',
      component: Dashboard,
    },
  ]

const Router = props => {

  return (
    <ConnectedRouter history={ props.history }>
    <Switch>
      {
        publicRoutes.map(route =>
          <Route
            key={ route.path }
            exact path={ route.path }
            component={ route.component }
          />
        )
      }
      {/* <Redirect to={ '/not-found' }/> */}
    </Switch>
    </ConnectedRouter>
  );
};

export default Router;
