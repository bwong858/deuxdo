import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodoCompletion } from '../../../store/actions/todos';

const filterCriteria = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

const sortCriteria = {
  CREATION_DATE: { optionText: 'Creation date', prop: 'creation_date' },
  EDIT_DATE: { optionText: 'Edit date', prop: 'creation_date' },
  TITLE: { optionText: 'Title', prop: 'title' },
  SUMMARY: { optionText: 'Summary', prop: 'summary' }
};

const TodoItem = connect(null, { toggleTodoCompletion })(
  ({ todo, toggleTodoCompletion, userIsEmployee }) => {
    let completionToggleClassName = 'completion-toggle';
    if (userIsEmployee) completionToggleClassName += ' employee';
    completionToggleClassName += todo.complete ? ' complete' : ' active';

    return (
      <div>
        <span
          className={completionToggleClassName}
          onClick={userIsEmployee ? () => toggleTodoCompletion(todo) : null}
        />
        <div className={todo.complete ? 'title-and-summary complete' : 'title-and-summary active'}>
          <h4>{todo.title}</h4>
          {todo.summary && <p>{todo.summary}</p>}
        </div>
      </div>
    );
  }
);

class TodosList extends Component {
  state = {
    filterBy: filterCriteria.ALL,
    sortBy: sortCriteria.CREATION_DATE.prop,
    reversed: false
  };

  render() {
    const { filterBy, sortBy, reversed } = this.state;
    const { ALL, ACTIVE, COMPLETED } = filterCriteria;

    const todos = Object.values(this.props.todos).filter(
      todo =>
        todo &&
        (filterBy === ALL ||
          (filterBy === ACTIVE && todo.complete === false) ||
          (filterBy === COMPLETED && todo.complete === true))
    );

    todos.sort((a, b) => (!reversed ? a[sortBy] > b[sortBy] : b[sortBy] > a[sortBy]));

    return (
      <div className="list">
        {todos.length ? (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} userIsEmployee={!this.props.userIsEmployee} />
          ))
        ) : (
          <h2>No tasks to display!</h2>
        )}
      </div>
    );
  }
}

export default connect(({ todos }) => ({ todos }), null)(TodosList);

console.log('remember to switch userIsEmployee... line 59 at time of writing');
