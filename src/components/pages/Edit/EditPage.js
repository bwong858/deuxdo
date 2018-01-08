import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InlineMessage from '../../elements/InlineMessage';
import { editTodo } from '../../../store/actions/todos';

class EditPage extends React.Component {
  state = {
    editMessage: null
  };

  componentWillMount = () => {
    const { todos, match: { params } } = this.props;
    const todo = todos[params.todoId];

    this.setState({ todo });
  };

  validate = () => {
    const title = this.state.todo.title.trim();
    if (!title) return 'A title must be provided';
    if (title.length > 100)
      return `Must be less than 100 characters. Current count: ${title.length}`;
    return null;
  };

  onChange = e => {
    const input = e.target.name;
    this.setState(
      {
        todo: { ...this.state.todo, [input]: e.target.value }
      },
      () => {
        if (this.state.validation) this.setState({ validation: this.validate() });
      }
    );
  };

  onCancel = e => {
    e.preventDefault();
    this.setState({
      editMessage: 'Canceled'
    });
    setTimeout(() => this.props.history.push('/todos'), 500);
  };

  onSubmit = e => {
    e.preventDefault();
    const validation = this.validate();
    if (validation) return this.setState({ validation });

    const title = this.state.todo.title.trim();
    const summary = this.state.todo.summary.trim();

    this.props.editTodo({ ...this.state.todo, title, summary });
    this.setState({
      editMessage: 'Changes saved'
    });
    setTimeout(() => this.setState({ editMessage: null }), 3000);
  };

  render = () => {
    return (
      <div id="edit-page">
        <h1>Edit</h1>
        <Link to="/todos">Back to Tasks</Link>
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="input-fields">
              <div className="field-container">
                <label htmlFor="title">Title</label>
                {this.state.validation && (
                  <InlineMessage type="error" text={this.state.validation} />
                )}
                <input
                  type="text"
                  name="title"
                  value={this.state.todo.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="field-container">
                <label htmlFor="summary">Summary</label>
                <textarea name="summary" value={this.state.todo.summary} onChange={this.onChange} />
              </div>
              <button type="submit">Save</button>
              <button onClick={this.onCancel}>Cancel</button>
            </div>
          </form>
        </div>
        {this.state.editMessage && <h2>{this.state.editMessage}</h2>}
      </div>
    );
  };
}

export default connect(({ todos }) => ({ todos }), { editTodo })(EditPage);
