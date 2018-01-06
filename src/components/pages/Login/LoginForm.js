import { connect } from 'react-redux';

import Form, { Validation, requiredValidation, validationTypes } from '../../elements/Form';
import { userLoggedIn } from '../../../store/actions/auth';
// import { login } from '../../../store/actions/auth';

class LoginForm extends Form {
  state = {
    inputs: {
      email: '',
      password: ''
    }
  };

  inputProps = {
    email: {
      label: 'Email',
      placeholder: 'manofmuffins@email.com',
      validator: () => {
        const email = this.state.inputs.email.trim();

        if (!email) return requiredValidation;
        return null;
      }
    },
    password: {
      label: 'Password',
      placeholder: 'Not 1234',
      validator: () => {
        const password = this.state.inputs.password;

        if (!password) return new Validation(validationTypes.ERROR, 'Por favor...');
        return null;
      }
    }
  };

  options = {
    buttonLabel: 'Log In'
  };

  onValidationSuccess = () => {
    const { email, password } = this.state.inputs;

    this.props.userLoggedIn({ email: email.trim(), password });
  };
}

export default connect(null, { userLoggedIn })(LoginForm);
// export default connect(null, { login })(LoginForm);
