import { combineReducers } from 'redux';

import user from './user';
import todos from './todos';
import ui from './ui';

export default combineReducers({
  user,
  todos,
  ui
});
