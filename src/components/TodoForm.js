import React, { useContext, useState } from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Store from '../context';

export default function TodoForm() {
  const {dispatch} = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState('');

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmitForm(e) {
    if(e.keyCode === 13) handleToAdd();
  }

  function handleToAdd() {
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('');
  }

  return (
    <>
      <Container maxWidth='md' align='center'>
        <TextField
          label="Todo"
          value={todo}
          autoFocus={true}
          placeholder="Enter new todo"
          onKeyUp={handleSubmitForm}
          onChange={handleTodoChange}
          margin="normal"
          fullWidth
        />
        <Button 
          variant="contained" 
          onClick={handleToAdd}
          color='primary'  
          >
          ADD
        </Button>
      </Container>
    </>
  );
}