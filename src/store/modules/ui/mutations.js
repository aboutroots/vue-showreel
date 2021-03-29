import types from './types';

const setSidebarOpen = (state, value) => {
  state.sidebarOpen = value;
};

export default {
  [types.SET_SIDEBAR_OPEN]: setSidebarOpen,
};
