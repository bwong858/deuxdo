import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TodosList from './TodosList';
import { isManager } from '../../utils';

const TodosPage = ({ history, userIsEmployee }) => {
  return (
    <div id="todos-page">
      <h1>Tasks</h1>
      {!userIsEmployee && <Link to="/create">Create New Tasks</Link>}
      <TodosList history={history} userIsEmployee={userIsEmployee} />
    </div>
  );
};

export default connect(({ user }) => ({ userIsEmployee: !isManager(user) }), null)(TodosPage);
