import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated, isManager } from '../utils';

const ManagerRoute = ({ isAuthenticated, isManager, component: Component, ...rest }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;
  return isManager ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/todos" />
  );
};

export default connect(
  ({ user }) => ({ isAuthenticated: isAuthenticated(user), isManager: isManager(user) }),
  null
)(ManagerRoute);
