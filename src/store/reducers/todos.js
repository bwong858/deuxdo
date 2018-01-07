import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETION } from '../actions/actionTypes';

const dummyTodo = {
  id: '8189sjjs',
  title: 'I am a dummy todo',
  summary: 'Here is my summary....',
  creation_date: 1515187916985,
  edit_date: 1515187916985,
  complete: false
};

const dummyTodo2 = {
  id: '8189sjjs2',
  title: 'I am a dummy todo as well',
  summary:
    'Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one',
  creation_date: 1515187916986,
  edit_date: 1515187916986,
  complete: false
};

const dummyTodo3 = {
  id: '8189sjjs3',
  title: 'I am a dummy todo as well, but with a longer title....., but with a longer title.....',
  summary:
    'Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one Here comes a longer one',
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

console.log('dummyState here');
