import * as React from 'react';
import { Counter } from '../components/Counter';

interface Props {
  items: string[];
  count: number;
}

export const List = (props: Props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <Counter count={props.count} />
    </div>
  );
};
