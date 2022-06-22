import actions from './actions';
import mutations from './mutations';
import { State } from './types';

export const defaultState = {
  users: [],
};

const state = (): State => defaultState;

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
