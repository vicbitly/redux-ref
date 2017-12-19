import { loadUsersSuccess } from './users';
import { USERS } from '../actions';

describe('users actions', () => {
  describe('loadUsersSuccess', () => {
    it('emits a payload of type USERS.LOAD_USERS_SUCCESS', () => {
      const actual = loadUsersSuccess([]);

      expect(actual.type).toEqual(USERS.LOAD_USERS_SUCCESS);
    });
  });
});
