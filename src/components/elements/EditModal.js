import React from 'react';
import { connect } from 'react-redux';

const EditModal = ({ modalMessage }) => {
  return modalMessage ? (
    <div className="modal">
      <div className="modal-content">
        <h1>{modalMessage}</h1>
      </div>
    </div>
  ) : null;
};

export default connect(({ ui: { modalMessage } }) => ({ modalMessage }), null)(EditModal);
