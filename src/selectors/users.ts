import { createSelector } from 'reselect';
import { RootStore } from '../reducers/index';

export const usersSelector = (state: RootStore) => state.users.users;

export const usersCountSelector = createSelector(
  usersSelector,
  users => {
    return users.reduce((count, user) => count += 1, 0);
  }
);

export const usersFullnamesSelector = createSelector(
  usersSelector,
  users => users.map((user) => user.fullName)
);
