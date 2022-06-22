import actions from './actions';
import mutations from './mutations';
import { State } from './types';

const state = (): State => ({
  users: [],
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
