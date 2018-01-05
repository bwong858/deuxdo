import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils';

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default connect(({ user }) => ({ isAuthenticated: isAuthenticated(user) }), null)(UserRoute);
