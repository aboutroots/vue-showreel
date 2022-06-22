/* eslint-disable camelcase */

export interface RootStore {
  modules: {
    auth: Record<string, unknown>;
    ui: Record<string, unknown>;
    users: Record<string, unknown>;
  };
}

export interface UserDTO {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
