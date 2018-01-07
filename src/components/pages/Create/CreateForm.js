import { connect } from 'react-redux';

import { addTodo } from '../../../store/actions/todos';
import { dispatchModalMessage } from '../../../store/actions/ui';
import Form, { Validation, requiredValidation, validationTypes } from '../../elements/Form';

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
        if (title.length > 100)
          return new Validation(
            validationTypes.ERROR,
            `Must be less than 100 characters. Current count: ${title.length}`
          );
        return null;
      }
    },
    summary: {
      label: 'Summary',
      inputType: 'textarea'
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
    this.setState({
      inputs: {
        title: '',
        summary: ''
      }
    });
    // this.props.dispatchModalMessage('Successfully added', 500);
    this.props.onTaskAdded();
  };
}

export default connect(null, { addTodo, dispatchModalMessage })(CreateForm);
