import UUID from 'uuid/v1';

import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETION } from '../actions/actionTypes';

export const addTodo = todo => {
  todo.active = true;
  todo.id = UUID();
  return {
    type: ADD_TODO,
    todo
  };
};

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const editTodo = todo => ({
  type: EDIT_TODO,
  todo
});

export const toggleTodoCompletion = todo => ({
  type: TOGGLE_TODO_COMPLETION,
  todo
});
