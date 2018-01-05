import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { isManager } from '../../utils';

const TodosPage = ({ user }) => (
  <div id="todos-page">
    <h1>Tasks</h1>
    {isManager(user) && <Link to="/create">Create New Tasks</Link>}
  </div>
);

export default connect(({ user }) => ({ user }), null)(TodosPage);
