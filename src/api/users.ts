/*
Functions that invoke endpoints, plus the details of HTTP (using fetch or
$.ajax, dealing with POST vs. PUT, etc...)
*/

import { ApiUser, ApiResponse } from './index';

// TODO: ve mock a failure rate to demonstrate error handling up the stack
const networkDelay = 500;
const mockUsers: ApiUser[] = [
  {
    login: 'mock_data_01',
    first_name: 'Alpha',
    last_name: 'Mock'
  },
  {
    login: 'mock_data_02',
    first_name: 'Beta',
    last_name: 'User'
  }
];

const mockResponseSuccess: ApiResponse = {
  response_code: 200,
  message: 'ok'
};

export function getUsers(): Promise<ApiUser[]> {
  return new Promise((res, rej) => {
    setTimeout(
      () => res([...mockUsers]),
      networkDelay);
  });
}

export function addUser(newUser: ApiUser): Promise<ApiResponse> {
  return new Promise((res, rej) => {
    setTimeout(
      () => {
        mockUsers.push(newUser);
        res(mockResponseSuccess);
      },
      networkDelay);
  });
}
