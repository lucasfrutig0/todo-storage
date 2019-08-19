import React from 'react';

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    //Initial Fake Data
    'Buy a milk',
    'Fiu Fó',
    'Smooke Weed'
  ]
});

export default Store;