import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import { userLoggedIn } from '../../../store/actions/auth';

const dummyEmployee = {
  first_name: 'Jondoe',
  email: 'employeeguy@email.com',
  role: 'employee'
};

const dummyManager = {
  first_name: 'McManager',
  email: 'themanager@email.com',
  role: 'manager'
};

const LoginPage = ({ userLoggedIn }) => (
  <div id="login-page">
    <h1>Login</h1>
    <LoginForm />
    <h4>
      or <Link to="/signup">Sign Up</Link>
    </h4>
    <div className="demo">
      <h4>
        ...or log in as an <a onClick={() => userLoggedIn(dummyEmployee)}>Employee</a> or{' '}
        <a onClick={() => userLoggedIn(dummyManager)}>Manager</a>
      </h4>
    </div>
  </div>
);

export default connect(null, { userLoggedIn })(LoginPage);
