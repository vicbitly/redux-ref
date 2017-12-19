import { Error, User } from '../services';
import { getUsers } from '../services/users';
import { USERS } from './index';
import { RootStore } from '../reducers';
import { ThunkAction } from 'redux-thunk';
import { AppAction } from '../actions';

export function loadUsersSuccess(users: User[]): AppAction<User[]> {
  return {
    type: USERS.LOAD_USERS_SUCCESS,
    payload: users
  };
}

export function loadUsersFailure(error: Error): AppAction<Error> {
  return {
    type: USERS.LOAD_USERS_ERROR,
    payload: error
  };
}

/*
A Thunk is a chunk of logic that does stuff and may or may not dispatch one
or more actions. In effect, it is a deferred decision to dispatch actions.
We are semi-coercing it into a traditional action (by dispatching an action
of USERS.REQUEST_USERS right away) so that reducers can listen to the original
action that triggered the Thunk.

Type Parameters:
1) return value
If the inner function returns a value, that value will be returned by the
dispatch() call that invoked the thunk, thus allowing us to chain asynch calls
and use the return values.

2) state type
Probably used to shorthand the type declarations of dispatch() and getState()
params passed to the inner function? Not even sure why Dispatch needs it.

3) extra argument
If you applyMiddleware(thunk.withExtraArgument(exArg)), then exArg will be
passed along to thunks as the third arg of the inner function. This can be
used to inject a dependency at the pseudo-composition root. Because of that,
we need the type of exArg for the type declarations of the inner function.
*/
export function requestUsers(): ThunkAction<Promise<void>, RootStore, null> {
  return (dispatch, getState) => {
    dispatch({ type: USERS.REQUEST_USERS });
    return getUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(loadUsersFailure(err));
      });
  };
}
