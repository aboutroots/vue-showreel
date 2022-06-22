import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import { getDefaultState, State } from './types';

const state = (): State => getDefaultState();

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
