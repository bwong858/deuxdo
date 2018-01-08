import {
  SET_MODAL_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_TODOS_DISPLAY_CRITERIA,
  SET_EDITING_TODO
} from '../actions/actionTypes';
import { visibilityFilters, sortCriteria } from '../../components/pages/Todos/TodosList';

export default (
  state = {
    todosDisplayCriteria: {
      visibleItems: visibilityFilters.ALL,
      sortBy: sortCriteria.EDIT_DATE.prop,
      reversed: false
    }
  },
  action
) => {
  switch (action.type) {
    case SET_MODAL_MESSAGE:
      return { ...state, modalMessage: action.message };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.message };
    case SET_TODOS_DISPLAY_CRITERIA:
      return {
        ...state,
        todosDisplayCriteria: { ...state.todosDisplayCriteria, ...action.criteria }
      };
    case SET_EDITING_TODO:
      return { ...state, editingTodo: action.todo };
    default:
      return state;
  }
};
