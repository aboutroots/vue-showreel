import { isNil } from 'lodash-es';
import { State } from './types';

const isAuthenticated = (state: State) => !isNil(state.currentUser);
const currentUser = (state: State) => state.currentUser;
const isInitialAuthFinished = (state: State) => state.initialAuthFinished;

export default {
  isAuthenticated,
  isInitialAuthFinished,
  currentUser,
};
