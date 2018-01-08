import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { setTodosDisplayCriteria } from '../../../store/actions/ui';

export const visibilityFilters = {
  INCOMPLETE: 'Incomplete',
  ALL: 'All',
  COMPLETE: 'Complete'
};

export const sortCriteria = {
  TITLE: { optionText: 'Title', prop: 'title' },
  SUMMARY: { optionText: 'Summary', prop: 'summary' },
  EDIT_DATE: { optionText: 'Edit date', prop: 'edit_date' },
  CREATION_DATE: { optionText: 'Creation date', prop: 'creation_date' }
};

class TodosList extends Component {
  componentWillMount = () => {
    this.setState({ displayCriteria: this.props.todosDisplayCriteria });
  };

  onCriteriaChange = criterion => {
    this.setState({ displayCriteria: { ...this.state.displayCriteria, criterion } });
  };

  render = () => {
    const {
      history,
      todos,
      userIsEmployee,
      todosDisplayCriteria,
      setTodosDisplayCriteria
    } = this.props;
    const { visibleItems, sortBy, reversed } = todosDisplayCriteria;
    const { ALL, INCOMPLETE, COMPLETE } = visibilityFilters;

    const visibleTodos = Object.values(todos).filter(
      todo =>
        todo &&
        (visibleItems === ALL ||
          (visibleItems === INCOMPLETE && todo.complete === false) ||
          (visibleItems === COMPLETE && todo.complete === true))
    );

    visibleTodos.sort((a, b) => {
      a = a[sortBy];
      b = b[sortBy];

      if (!isNaN(a)) return !reversed ? b - a : a - b;

      a = a.toLowerCase();
      b = b.toLowerCase();
      return !reversed ? a > b : b > a;
    });

    return (
      <div className="options-and-list">
        <div className="options">
          <div className="visibility">
            {Object.values(visibilityFilters).map(filter => (
              <span
                key={filter}
                className={filter === visibleItems ? 'selected' : ''}
                onClick={() => setTodosDisplayCriteria({ visibleItems: filter })}
              >
                {filter}
              </span>
            ))}
          </div>
          <div className="sort">
            {Object.values(sortCriteria).map(criteria => (
              <span
                key={criteria.prop}
                className={criteria.prop === sortBy ? 'selected' : ''}
                onClick={() => setTodosDisplayCriteria({ sortBy: criteria.prop })}
              >
                {criteria.optionText}
              </span>
            ))}
            <span
              className={reversed ? 'selected' : ''}
              onClick={() => setTodosDisplayCriteria({ reversed: !reversed })}
            >
              Reversed
            </span>
          </div>
        </div>
        {visibleTodos.length ? (
          <div className="visible-todos">
            {visibleTodos.map(todo => (
              <TodoItem
                key={todo.id}
                history={history}
                todo={todo}
                userIsEmployee={userIsEmployee}
              />
            ))}
          </div>
        ) : (
          <h2>{`No ${
            visibleItems !== 'All' ? visibleItems.toLowerCase() : ''
          } tasks to display`}</h2>
        )}
      </div>
    );
  };
}

export default connect(
  ({ todos, ui: { todosDisplayCriteria } }) => ({ todos, todosDisplayCriteria }),
  {
    setTodosDisplayCriteria
  }
)(TodosList);

console.log('remember to switch userIsEmployee... line 63 at time of writing');
