import { UserDTO } from '@/models';
import { getDefaultState, MutationType, State } from './types';

const setCurrentUser = (state: State, payload: UserDTO) => {
  state.currentUser = payload;
};
const setInitialAuthFinished = (state: State) => {
  state.initialAuthFinished = true;
};

const resetState = (state: State) => {
  Object.assign(state, getDefaultState());
};

export default {
  [MutationType.RESET]: resetState,
  [MutationType.SET_CURRENT_USER]: setCurrentUser,
  [MutationType.SET_INITIAL_AUTH_FINISHED]: setInitialAuthFinished,
};
