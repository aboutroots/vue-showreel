import { UserDTO } from '@/models';
import { MutationType, State } from './types';

const setCurrentUser = (state: State, payload: UserDTO) => {
  state.currentUser = payload;
};
const setInitialAuthFinished = (state: State) => {
  state.initialAuthFinished = true;
};

export default {
  [MutationType.SET_CURRENT_USER]: setCurrentUser,
  [MutationType.SET_INITIAL_AUTH_FINISHED]: setInitialAuthFinished,
};
