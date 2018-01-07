import React from 'react';
import { connect } from 'react-redux';

import { toggleTodoCompletion, removeTodo } from '../../../store/actions/todos';
import { setTodosVisibilityFilter } from '../../../store/actions/ui';

let TodoItem = ({ todo, toggleTodoCompletion, userIsEmployee, removeTodo }) => {
  let completionToggleClassName = 'completion-toggle';
  if (userIsEmployee) completionToggleClassName += ' employee';
  completionToggleClassName += todo.complete ? ' complete' : ' active';

  return (
    <div className={todo.complete ? 'todo-item complete' : 'todo-item'}>
      <span
        className={completionToggleClassName}
        onClick={() =>
          userIsEmployee
            ? toggleTodoCompletion(todo)
            : alert('Only employees (not managers) may toggle completion')
        }
      />
      <h4>{todo.title}</h4>
      {todo.summary && <p>{todo.summary}</p>}
      {!userIsEmployee && (
        <span
          className="edit"
          onClick={() => console.log('I have been clicked') /*go to edit page*/}
        />
      )}
      {!userIsEmployee && <span className="delete" onClick={() => removeTodo(todo)} />}
    </div>
  );
};

TodoItem = connect(null, { toggleTodoCompletion, removeTodo })(TodoItem);

const visibilityFilters = {
  INCOMPLETE: 'Incomplete',
  ALL: 'All',
  COMPLETE: 'Complete'
};

const sortCriteria = {
  CREATION_DATE: { optionText: 'Creation date', prop: 'creation_date' },
  EDIT_DATE: { optionText: 'Edit date', prop: 'edit_date' },
  TITLE: { optionText: 'Title', prop: 'title' },
  SUMMARY: { optionText: 'Summary', prop: 'summary' }
};

const TodosList = ({ todos, todosFilter, userIsEmployee, setTodosVisibilityFilter }) => {
  const { visibileItems, sortBy, reversed } = todosFilter;
  const { ALL, INCOMPLETE, COMPLETE } = visibilityFilters;

  const visibleTodos = Object.values(todos).filter(
    todo =>
      todo &&
      (visibileItems === ALL ||
        (visibileItems === INCOMPLETE && todo.complete === false) ||
        (visibileItems === COMPLETE && todo.complete === true))
  );

  visibleTodos.sort((a, b) => (!reversed ? a[sortBy] > b[sortBy] : b[sortBy] > a[sortBy]));

  return (
    <div className="list">
      <div className="options visibility">
        {Object.values(visibilityFilters).map(filter => (
          <span
            key={filter}
            className={filter === visibileItems ? 'selected' : ''}
            onClick={() => setTodosVisibilityFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      {/*<div className="options sort">
        {Object.values(sortCriteria).map(criteria => (
          <span
            key={criteria.prop}
            className={criteria === sortBy ? 'selected' : ''}
            onClick={() => setTodosSortBy(criteria.prop)}
          >
            {criteria.optionText}
          </span>
        ))}
      </div>*/}
      {visibleTodos.length ? (
        <div className="visible-todos">
          {visibleTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} userIsEmployee={userIsEmployee} />
          ))}
        </div>
      ) : (
        <h2>No tasks to display!</h2>
      )}
    </div>
  );
};

export default connect(({ todos, ui }) => ({ todos, todosFilter: ui.todosFilter }), {
  setTodosVisibilityFilter
})(TodosList);

console.log('remember to switch userIsEmployee... line 63 at time of writing');
