import React from 'react';
import { Link } from 'react-router-dom';

const CreatePage = () => {
  return (
    <div>
      <h1>New Task</h1>
      <Link to="/todos">Back to Tasks</Link>
    </div>
  );
};

export default CreatePage;
