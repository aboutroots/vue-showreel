import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { State } from './types';

const state = (): State => ({
  currentUser: null,
  initialAuthFinished: false,
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
