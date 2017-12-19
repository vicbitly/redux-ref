import * as React from 'react';
import { User } from '../services';

interface Props {
  users: User[];
}

export const UserList = (props: Props) => {
  return (
    <ul>
      {props.users.map((user) => <li key={user.login}>{user.fullName}</li>)}
    </ul>
  );
};
