import React, { useContext } from 'react';

import Store from '../context';

import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import CheckIcon from '@material-ui/icons/Check';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { TodoHeader } from './TodoHeader';

export default function TodoList() {
  const {state, dispatch} = useContext(Store);

  const pluralize = count => count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header =
    state.todos.length === 0 ? (
      <h4>Yay! All todos are done! Take a rest!</h4>
    ) : (
      <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
    );
    return (
      <div>
        {header}
        <List>
          {state.todos.map(t => (
            <ListItem key={t}>
              <ListItemText primary={t} />
              <Fab 
                color="success" 
                aria-label="add"
                style={{ marginLeft: 10 }}
                onClick={() => dispatch({ type: "COMPLETE", payload: t })}
                >
                <CheckIcon />
              </Fab>
            </ListItem>
          ))}
        </List>
      </div>
    );
}
