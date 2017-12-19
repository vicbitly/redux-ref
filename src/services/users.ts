/*
Functions to transport data between the app store and "data sources". The app
store shouldn't need to know if the data came from Bitly endpoints, Google
endpoints, "the cloud", or a random data generator, so those details are
hidden below this layer.
*/

import { User } from './index';
import { getUsers as apiGetUsers, addUser as apiAddUser } from '../api/users';

export function getUsers(): Promise<User[]> {
  return apiGetUsers()
    .then((apiUsers) => apiUsers.map((apiUser) => {
      return {
        login: apiUser.login,
        fullName: `${apiUser.first_name} ${apiUser.last_name}`
      };
    }));
}

export function addUser(newUser: User): Promise<void> {
  const splitName = newUser.fullName.split(' ');
  const firstName = splitName[0];
  const lastName = splitName.splice(1).join(' ');
  const apiUser = {
    login: newUser.login,
    first_name: firstName,
    last_name: lastName
  };

  return apiAddUser(apiUser)
    .then((response) => {
      if (response.response_code !== 200) {
        throw new Error(response.message);
      }
    });
}
