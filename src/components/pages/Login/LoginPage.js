import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

const LoginPage = () => (
  <div id="login-page">
    <h1>Login</h1>
    <LoginForm />
    <h4>
      or <Link to="/signup">Sign Up</Link>
    </h4>
  </div>
);

export default LoginPage;
