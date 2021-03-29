import { isNil } from 'lodash-es';

const isAuthenticated = (state) => !isNil(state.currentUser);
const isInitialAuthFinished = (state) => state.initialAuthFinished;

export default {
  isAuthenticated,
  isInitialAuthFinished,
};
