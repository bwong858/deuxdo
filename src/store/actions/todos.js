import UUID from 'uuid/v1';

import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETION } from '../actions/actionTypes';

export const addTodo = todo => {
  todo.complete = false;
  todo.creation_date = Date.now();
  todo.edit_date = todo.creation_date;
  todo.id = UUID();
  return {
    type: ADD_TODO,
    todo
  };
};

export const editTodo = todo => ({
  type: EDIT_TODO,
  todo
});

export const toggleTodoCompletion = todo => ({
  type: TOGGLE_TODO_COMPLETION,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});
