import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { State } from './types';

export const defaultState = {
  currentUser: null,
  initialAuthFinished: false,
};

const state = (): State => defaultState;

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
