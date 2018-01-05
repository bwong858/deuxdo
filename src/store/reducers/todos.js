import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETION } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.todo.id]: action.todo };
    case EDIT_TODO:
      return { ...state, [action.todo.id]: { ...action.todo, edit_date: Date.now() } };
    case TOGGLE_TODO_COMPLETION:
      return {
        ...state,
        [action.todo.id]: {
          ...action.todo,
          complete: !action.todo.complete,
          completion_date: !action.todo.complete ? Date.now() : null
        }
      };
    case REMOVE_TODO:
      return { ...state, [action.todo.id]: null };
    default:
      return state;
  }
};
