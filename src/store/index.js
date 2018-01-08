import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers';
import { USER_LOGGED_OUT } from './actions/actionTypes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
  if (action.type === USER_LOGGED_OUT) {
    localStorage.removeItem('taskerJWT');
  }
  return appReducer(state, action);
  // return appReducer(action.type === USER_LOGGED_OUT ? state : state, action);
};

export default createStore(rootReducer, {}, enhancers);
