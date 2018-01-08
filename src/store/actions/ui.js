import { SET_MODAL_MESSAGE, SET_ERROR_MESSAGE, SET_TODOS_DISPLAY_CRITERIA } from './actionTypes';

export const dispatchModalMessage = (message, displayTimeMS) => dispatch => {
  dispatch(setModalMessage(message));
  setTimeout(() => dispatch(setModalMessage(null)), displayTimeMS);
};

export const setModalMessage = message => ({
  type: SET_MODAL_MESSAGE,
  message
});

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  message
});

export const setTodosDisplayCriteria = criteria => ({
  type: SET_TODOS_DISPLAY_CRITERIA,
  criteria
});
