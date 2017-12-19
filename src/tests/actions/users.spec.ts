import { loadUsersSuccess, loadUsersFailure, requestUsers } from '../../actions/users';
import { Error, User } from '../../services';
import { USERS } from '../../actions';

const mockError: Error = {
  message: 'Mock error',
  code: 500
};

describe('users actions', () => {
  describe('loadUsersSuccess', () => {
    it('returns an action for load users completing successfully', () => {
      const actual = loadUsersSuccess([]);

      expect.assertions(1);
      expect(actual.type).toEqual(USERS.LOAD_USERS_SUCCESS);
    });
  });

  describe('loadUsersFailure', () => {
    it('returns an action for load users failing', () => {
      const actual = loadUsersFailure(mockError);

      expect.assertions(1);
      expect(actual.type).toEqual(USERS.LOAD_USERS_ERROR);
    });

    it('returns an action with the specified error payload', () => {
      const actual = loadUsersFailure(mockError);

      expect.assertions(1);
      expect(actual.payload).toEqual(mockError);
    });
  });
});
