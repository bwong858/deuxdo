import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isManager } from '../utils';

const ManagerRoute = ({ user, isAuthenticated, component: Component, ...rest }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;
  return isManager(user) ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/todos" />
  );
};

export default connect(({ user }) => ({ user, isAuthenticated: !!user.email }), null)(ManagerRoute);
