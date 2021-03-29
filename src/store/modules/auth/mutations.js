import types from './types';

const setCurrentUser = (state, payload) => {
  state.currentUser = payload;
};
const setInitialAuthFinished = (state) => {
  state.initialAuthFinished = true;
};

export default {
  [types.SET_CURRENT_USER]: setCurrentUser,
  [types.SET_INITIAL_AUTH_FINISHED]: setInitialAuthFinished,
};
