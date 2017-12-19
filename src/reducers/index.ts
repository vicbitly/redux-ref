import {
  combineReducers,
  createStore,
  applyMiddleware,
  Store,
  Reducer
} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { UsersStore, UsersReducer, initialState as usersInitialState } from './users';
import { ServicesStore, ServicesReducer, initialState as servicesInitialState } from './services';

export interface RootStore {
  users: UsersStore;
  services: ServicesStore;
}

export const rootReducer: Reducer<RootStore> = combineReducers({
  users: UsersReducer,
  services: ServicesReducer
});

export const initialState = {
  users: usersInitialState,
  services: servicesInitialState
};

export function initStore(state?: RootStore): Store<RootStore> {
    return createStore(
        rootReducer,
        state || initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
