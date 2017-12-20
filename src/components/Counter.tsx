import * as React from 'react';

interface Props {
  count: number;
}

export const Counter = (props: Props) => {
 return (
   <div>Count: {props.count}</div>
 );
};
