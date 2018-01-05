import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';
import ManagerRoute from './routes/ManagerRoute';
import AppHeader from './elements/AppHeader';
import AppFooter from './elements/AppFooter';
import SignupPage from './pages/Signup/SignupPage';
import LoginPage from './pages/Login/LoginPage';
import TodosPage from './pages/Todos/TodosPage';
import CreatePage from './pages/Create/CreatePage';
import EditPage from './pages/Edit/EditPage';

const App = ({ location }) => (
  <div id="app-wrapper">
    <AppHeader location={location} />
    <div id="app-body">
      <Switch>
        <GuestRoute location={location} exact path="/signup" component={SignupPage} />
        <GuestRoute location={location} exact path="/login" component={LoginPage} />
        <UserRoute location={location} exact path="/todos" component={TodosPage} />
        <ManagerRoute location={location} exact path="/create" component={CreatePage} />
        <ManagerRoute location={location} exact path="/edit" component={EditPage} />
        <Redirect to="/todos" />
      </Switch>
    </div>
    <AppFooter />
  </div>
);

export default App;
