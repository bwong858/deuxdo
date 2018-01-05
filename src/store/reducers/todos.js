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
          active: !action.todo.active,
          completion_date: action.todo.active ? Date.now() : null
        }
      };
    case REMOVE_TODO:
      return { ...state, [action.todo.id]: null };
    default:
      return state;
  }
};
// export default (state = {}, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//     case EDIT_TODO:
//       return { ...state, [action.todo.id]: action.todo };
//     case REMOVE_TODO:
//       return { ...state, [action.todo.id]: null };
//     case TOGGLE_TODO_COMPLETION:
//       return { ...state, [action.todo.id]: { ...action.todo, active: !action.todo.active } };
//     default:
//       return state;
//   }
// };

// export default (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.todo];
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.todo.id);
//     case EDIT_TODO:
//       return state.map(todo => (todo.id === action.todo.id ? action.todo : todo));
//     case TOGGLE_TODO_COMPLETION:
//       return state.map(
//         todo =>
//           todo.id === action.todo.id ? { ...action.todo, active: !action.todo.active } : todo
//       );
//     default:
//       return state;
//   }
// };
