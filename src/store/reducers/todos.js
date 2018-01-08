import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETION } from '../actions/actionTypes';

const dummyTodo = {
  id: '8189sjjs',
  title: 'I am a dummy todo. Do things with me',
  summary:
    "Toggle me complete/incomplete if you're an employee, or edit or delete me if you're a manager",
  creation_date: 1515187916989,
  edit_date: 1515187916989,
  complete: false
};

const dummyTodo2 = {
  id: '8189sjjs2',
  title: 'Check the filtering out',
  creation_date: 1515187916988,
  edit_date: 1515187916988,
  complete: false
};

const dummyTodo3 = {
  id: '8189sjjs3',
  title: 'Enjoy some lorem ipsum',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  creation_date: 1515187916987,
  edit_date: 1515187916987,
  complete: false
};

const dummyState = {
  '8189sjjs': dummyTodo,
  '8189sjjs2': dummyTodo2,
  '8189sjjs3': dummyTodo3
};

export default (state = dummyState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.todo.id]: action.todo };
    case EDIT_TODO:
      return {
        ...state,
        [action.todo.id]: { ...action.todo, edit_date: Date.now() }
      };
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

console.log('dummyState here');
