import actions from './actions';
import mutations from './mutations';

const state = () => ({
  sidebarOpen: true,
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
