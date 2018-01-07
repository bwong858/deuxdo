import {
  SET_MODAL_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_TODOS_VISIBILITY_FILTER
} from '../actions/actionTypes';

export default (
  state = { todosFilter: { visibileItems: 'All', sortBy: 'edit_date', reversed: false } },
  action
) => {
  switch (action.type) {
    case SET_MODAL_MESSAGE:
      return { ...state, modalMessage: action.message };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.message };
    case SET_TODOS_VISIBILITY_FILTER:
      return { ...state, todosFilter: { ...state.todosFilter, visibileItems: action.filter } };
    default:
      return state;
  }
};
