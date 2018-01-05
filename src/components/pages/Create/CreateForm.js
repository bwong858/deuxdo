import { connect } from 'react-redux';

import { addTodo } from '../../../store/actions/todos';
import Form, { requiredValidation } from '../../elements/Form';

class CreateForm extends Form {
  state = {
    inputs: {
      title: '',
      summary: ''
    }
  };

  inputProps = {
    title: {
      label: 'Title',
      validator: () => {
        const title = this.state.inputs.title.trim();
        if (!title) return requiredValidation;
        return null;
      }
    },
    summary: {
      label: 'Summary'
    }
  };

  options = {
    buttonLabel: 'Add',
    verifyInputChange: true
  };

  onValidationSuccess = () => {
    const { title, summary } = this.state.inputs;
    this.props.addTodo({
      title: title.trim(),
      summary: summary.trim()
    });
  };
}

export default connect(null, { addTodo })(CreateForm);
