import React from 'react';
import { connect } from 'react-redux';

import { toggleTodoCompletion, removeTodo } from '../../../store/actions/todos';

const TodoItem = ({ history, todo, toggleTodoCompletion, userIsEmployee, removeTodo }) => {
  let completionToggleClassName = 'completion-toggle';
  completionToggleClassName += todo.complete ? ' complete' : ' active';
  if (userIsEmployee) completionToggleClassName += ' employee';

  return (
    <div className={todo.complete ? 'todo-item complete' : 'todo-item'}>
      <span
        className={completionToggleClassName}
        onClick={() =>
          userIsEmployee ? toggleTodoCompletion(todo) : alert('Managers may not toggle completion')
        }
      />
      <h4>{todo.title}</h4>
      {todo.summary && <p>{todo.summary}</p>}
      {!userIsEmployee && (
        <span className="edit" onClick={() => history.push(`/edit/${todo.id}`)} />
      )}
      {!userIsEmployee && <span className="delete" onClick={() => removeTodo(todo)} />}
    </div>
  );
};

export default connect(null, { toggleTodoCompletion, removeTodo })(TodoItem);
