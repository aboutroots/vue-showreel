/* eslint-disable no-shadow */
import { UserDTO } from '@/models';

export interface State {
  currentUser: UserDTO | null;
  initialAuthFinished: boolean;
}

export const getDefaultState = () => ({
  currentUser: null,
  initialAuthFinished: false,
});

export enum MutationType {
  RESET = 'RESET',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_INITIAL_AUTH_FINISHED = 'SET_INITIAL_AUTH_FINISHED',
}
