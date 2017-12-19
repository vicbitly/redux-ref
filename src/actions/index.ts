import { Action } from 'redux';

export const USERS = {
  REQUEST_USERS: 'USERS.REQUEST_USERS',
  LOAD_USERS_SUCCESS: 'USERS.LOAD_USERS',
  LOAD_USERS_ERROR: 'USERS.LOAD_USERS.ERROR'
};

export interface AppAction<P> extends Action {
  type: string;
  payload: P;
}
