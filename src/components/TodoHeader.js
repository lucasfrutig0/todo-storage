import React from 'react';

export const TodoHeader = props => (
  <div>
    <h5>Todo List</h5>
    <div>{props.children}</div>
  </div>
);

