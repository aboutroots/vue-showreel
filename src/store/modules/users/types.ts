/* eslint-disable no-shadow */

import { UserDTO } from '@/models';

export interface State {
  users: {
    [key: string]: UserDTO;
  };
}

export const getDefaultState = () => ({
  users: {},
});

export enum MutationType {
  RESET = 'RESET',
  SET_USERS = 'SET_USERS',
}
