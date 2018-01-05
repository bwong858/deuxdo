import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isManager } from '../utils';

const ManagerRoute = ({ user, isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        isManager(user) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/todos" />
        )
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default connect(({ user }) => ({ user, isAuthenticated: !!user.email }), null)(ManagerRoute);
