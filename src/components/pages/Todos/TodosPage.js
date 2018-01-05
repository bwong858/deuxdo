import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { isManager } from '../../utils';

const filterCriteria = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

const sortCriteria = {
  CREATION_DATE: 'Creation date',
  EDIT_DATE: 'Edit date',
  TITLE: 'Title',
  SUMMARY: 'Summary'
};

const TodoItem = ({ todo }) => (
  <div>
    <p>Complete: {todo.active}</p>
    <p>Title: {todo.title}</p>
    <p>Summary: {todo.summary}</p>
  </div>
);

class TodosList extends Component {
  state = {
    filterBy: filterCriteria.ACTIVE,
    sortBy: sortCriteria.CREATION_DATE,
    reversed: false
  };

  render() {
    const { filterBy, sortBy, reversed } = this.state;
    const { ALL, ACTIVE, COMPLETED } = filterCriteria;
    const { CREATION_DATE, EDIT_DATE, TITLE, SUMMARY } = sortCriteria;

    const todos = Object.values(this.props.todos).filter(
      todo =>
        filterBy === ALL ||
        (filterBy === ACTIVE && todo.active === true) ||
        (filterBy === COMPLETED && todo.active === false)
    );

    if (sortBy === CREATION_DATE || sortBy === EDIT_DATE) {
      if (!reversed) todos.sort((a, b) => a[sortBy] - b[sortBy]);
      else todos.sort((a, b) => b[sortBy] - a[sortBy]);
    } else {
      if (!reversed) todos.sort((a, b) => a[sortBy] > b[sortBy]);
      else todos.sort((a, b) => b[sortBy] > a[sortBy]);
    }

    return (
      <div>
        {todos.length ? todos.map(todo => <TodoItem todo={todo} />) : <h2>No tasks to display!</h2>}
      </div>
    );
  }
}

const ConnectedTodosList = connect(({ todos }) => ({ todos }), null)(TodosList);

const TodosPage = ({ user }) => (
  <div id="todos-page">
    <h1>Tasks</h1>
    {isManager(user) && <Link to="/create">Create New Tasks</Link>}
    <ConnectedTodosList />
  </div>
);

export default connect(({ user }) => ({ user }), null)(TodosPage);
