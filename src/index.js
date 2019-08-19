import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Store from './context';
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store));

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
      useReducer(reducer, globalStore), 
      'state' // The localStorage key
    );
  return (
    // State.Provider passes the state and dispatcher to the down
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Typography variant='h3' align='center'>Todo List w/ React Hooks</Typography>
        <Store.Provider value={{state, dispatch}}>
          <TodoForm />
          <TodoList />
        </Store.Provider>
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
