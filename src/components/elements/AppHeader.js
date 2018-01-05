import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../store/actions/auth';
// import { isManager } from '../utils';

const AppHeader = ({ user, isAuthenticated, logout, location }) => {
  console.log(location);
  return (
    <header id="app-header">
      <h1>tasker</h1>
      {/*isAuthenticated &&
        isManager(user) && (
          <div className="create-container">
            {location.pathname === '/todos' ? (
              <Link to="/create">Create New Tasks</Link>
            ) : (
              <Link to="/todos">Back to Tasks</Link>
            )}
          </div>
        )*/}
      {isAuthenticated && (
        <div className="logout-container">
          <p>Hi, {user.email}</p>
          <button className="logout-button" onClick={logout}>
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};

export default connect(({ user }) => ({ user, isAuthenticated: !!user.email }), { logout })(
  AppHeader
);
