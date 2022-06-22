import { MutationType, State } from './types';

const setSidebarOpen = (state: State, value: boolean) => {
  state.sidebarOpen = value;
};

export default {
  [MutationType.SET_SIDEBAR_OPEN]: setSidebarOpen,
};
