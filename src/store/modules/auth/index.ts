import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { getDefaultState, State } from './types';

const state = (): State => getDefaultState();

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
