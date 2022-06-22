import { getDefaultState, MutationType, State } from './types';

const setSidebarOpen = (state: State, value: boolean) => {
  state.sidebarOpen = value;
};

const resetState = (state: State) => {
  Object.assign(state, getDefaultState());
};

export default {
  [MutationType.RESET]: resetState,
  [MutationType.SET_SIDEBAR_OPEN]: setSidebarOpen,
};
