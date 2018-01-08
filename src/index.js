import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';

import './styles/index.scss';
import App from './components/App';
import store from './store';
import { userLoggedIn } from './store/actions/auth';
import { setTodosDisplayCriteria } from './store/actions/ui';

if (localStorage.taskerJWT) {
  const { user, todosDisplayCriteria } = decode(localStorage.taskerJWT);
  store.dispatch(userLoggedIn(user));
  // store.dispatch(setTodosDisplayCriteria(todosDisplayCriteria));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
