import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/todos" />)}
  />
);

export default connect(({ user }) => ({ isAuthenticated: isAuthenticated(user) }), null)(
  GuestRoute
);
