import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../store/actions/auth';
import { isAuthenticated } from '../utils';

const AppHeader = ({ user, todos, logout }) => {
  const userIsAuthenticated = isAuthenticated(user);
  const activeTodosCount = Object.values(todos).filter(todo => todo && !todo.complete).length;

  return (
    <header id="app-header">
      {userIsAuthenticated && <h3>Incomplete Tasks: {activeTodosCount}</h3>}
      <h1>tasker</h1>
      {userIsAuthenticated && (
        <div>
          <p>Hi, {user.email}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </header>
  );
};

export default connect(({ user, todos }) => ({ user, todos }), {
  logout
})(AppHeader);
