import { ActionContext } from 'vuex';
import { RootStore } from '@/models';
import { MutationType, State } from './types';

type Context = ActionContext<State, RootStore>;

export default {
  TOGGLE_SIDEBAR({ state, commit }: Context) {
    commit(MutationType.SET_SIDEBAR_OPEN, !state.sidebarOpen);
  },
  CLOSE_SIDEBAR({ commit }: Context) {
    commit(MutationType.SET_SIDEBAR_OPEN, false);
  },
};
