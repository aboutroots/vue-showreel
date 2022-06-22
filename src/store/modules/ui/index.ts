import actions from './actions';
import mutations from './mutations';
import { State } from './types';

const state = (): State => ({
  sidebarOpen: true,
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
