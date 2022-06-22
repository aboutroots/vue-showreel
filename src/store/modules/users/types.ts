/* eslint-disable no-shadow */

import { UserDTO } from '@/models';

export interface State {
  users: UserDTO[];
}

export enum MutationType {
  SET_USERS = 'SET_USERS',
}
