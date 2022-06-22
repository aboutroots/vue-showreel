/* eslint-disable no-shadow */
export interface State {
  sidebarOpen: boolean;
}

export const getDefaultState = () => ({
  sidebarOpen: true,
});

export enum MutationType {
  RESET = 'RESET',
  SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN',
}
