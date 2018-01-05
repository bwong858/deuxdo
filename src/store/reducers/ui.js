import { SET_MODAL_MESSAGE, SET_ERROR_MESSAGE } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_MODAL_MESSAGE:
      return { ...state, modalMessage: action.message };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
};
