import types from './types';

export default {
  TOGGLE_SIDEBAR({ state, commit }) {
    commit(types.SET_SIDEBAR_OPEN, !state.sidebarOpen);
  },
  CLOSE_SIDEBAR({ commit }) {
    commit(types.SET_SIDEBAR_OPEN, false);
  },
};
