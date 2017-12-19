import { Reducer } from 'redux';
import * as ACTIONS from '../actions';

export interface ServicesStore {
  callsInFlight: number;
}

export const initialState: ServicesStore = {
  callsInFlight: 0
};

export const ServicesReducer: Reducer<ServicesStore> =
    (state = initialState, action) => {
  let newState: ServicesStore;

  switch (action.type) {
    case ACTIONS.USERS.REQUEST_USERS:
      newState = { callsInFlight: state.callsInFlight + 1 };
      return newState;

    case ACTIONS.USERS.LOAD_USERS_ERROR:
    case ACTIONS.USERS.LOAD_USERS_SUCCESS:
      newState = { callsInFlight: state.callsInFlight - 1 };
      return newState;

    default:
      return state;
  }
};
