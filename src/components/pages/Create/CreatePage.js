import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CreateForm from './CreateForm';
import { setTimeout } from 'timers';

class CreatePage extends Component {
  state = {
    showTaskAddedNotification: false
  };

  notifyTaskAdded = () => {
    this.setState({
      showTaskAddedNotification: true
    });
    setTimeout(() => this.setState({ showTaskAddedNotification: false }), 2000);
  };

  render() {
    return (
      <div id="create-page">
        <h1>New Task</h1>
        <Link to="/todos">Back to Tasks</Link>
        <div>
          <CreateForm onTaskAdded={this.notifyTaskAdded} />
        </div>
        {this.state.showTaskAddedNotification && <h2>Task added</h2>}
      </div>
    );
  }
}

export default CreatePage;
