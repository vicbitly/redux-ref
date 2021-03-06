import * as React from 'react';
import { User } from '../services';
import { Counter } from '../components/Counter';

interface Props {
  users: User[];
  count: number;
}

export const UserList = (props: Props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => <li key={user.login}>{user.fullName}</li>)}
      </ul>
      <Counter count={props.count} />
    </div>
  );
};
