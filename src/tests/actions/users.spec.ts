import { loadUsersSuccess, loadUsersFailure, requestUsers } from '../../actions/users';
import { Error, User } from '../../services';
import { USERS } from '../../actions';

const mockError: Error = {
  message: 'Mock error',
  code: 500
};

const mockUsers = [
  {
    login: 'mock',
    fullName: 'mock mock mock'
  }
];

jest.mock('../../services/users', () => {
  return {
    getUsers: () => new Promise((res, rej) => res([...mockUsers]))
  };
});

// replace this with a spy
const mockDispatch = (data) => {
  console.log(data); // tslint:disable-line
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

  describe('requestUsers', () => {
    it('when successful returns a list of users', () => {
      const thunk = requestUsers();

      thunk(mockDispatch, null, null).then((data) => {
        // assert on the mockDispatch spy
      });
    });
  });
});
