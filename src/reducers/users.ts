import { Reducer } from 'redux';
import * as ACTIONS from '../actions';
import { User } from '../services';

export interface UsersStore {
  users: User[];
}

export const initialState: UsersStore = {
  users: []
};

export const UsersReducer: Reducer<UsersStore> =
    (state = initialState, action) => {
  let newState: UsersStore;

  switch (action.type) {
    case ACTIONS.USERS.LOAD_USERS_SUCCESS:
      newState = { users: [...action.users] };
      return newState;

    default:
      return state;
  }
};
