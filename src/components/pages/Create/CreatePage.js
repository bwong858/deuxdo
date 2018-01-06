import React from 'react';
import { Link } from 'react-router-dom';

import CreateForm from './CreateForm';

const CreatePage = () => {
  return (
    <div id="create-page">
      <h1>New Task</h1>
      <Link to="/todos">Back to Tasks</Link>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
