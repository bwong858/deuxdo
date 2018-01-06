import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from './SignupForm';
import InlineMessage from '../../elements/InlineMessage';
import { validationTypes } from '../../elements/Form';

class SignupPage extends Component {
  state = {
    showWarning: true
  };

  componentDidMount = () => {
    setTimeout(
      () =>
        this.setState({
          showWarning: false
        }),
      3000
    );
  };

  render() {
    return (
      <div id="signup-page">
        <h1>Signup</h1>
        <SignupForm />
        <h4>
          or <Link to="/login">Log In</Link>
        </h4>
        {this.state.showWarning && (
          <InlineMessage
            type={validationTypes.WARNING}
            text="This is for employees only. Managers, please see IT"
          />
        )}
      </div>
    );
  }
}

export default SignupPage;
