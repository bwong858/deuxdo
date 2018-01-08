import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CreateForm from '../Create/CreateForm';
import { editTodo } from '../../../store/actions/todos';

class EditForm extends CreateForm {
  constructor() {
    super();
    this.onValidationSuccess = this.onValidationSuccess.bind(this);
  }

  componentDidMount() {
    const { title, summary } = this.parseTodoFromURL();

    this.setState({ inputs: { title, summary }, showEditSaveMessage: false });
  }

  parseTodoFromURL = () => {
    const { todos, match: { params } } = this.props;
    return todos[params.todoId];
  };

  options = {
    buttonLabel: 'Save',
    verifyInputChange: true
  };

  onCancel = e => {
    e.preventDefault();
    this.props.history.push('/todos');
  };

  onValidationSuccess() {
    const { title, summary } = this.state.inputs;
    const todo = this.parseTodoFromURL();

    this.props.editTodo({ ...todo, title, summary });
    this.setState({
      showEditSaveMessage: true
    });
    setTimeout(() => this.setState({ showEditSaveMessage: false }), 4000);
  }
}

export default connect(({ todos }) => ({ todos }), { editTodo })(EditForm);
