import { useEffect } from "react";


// Accepts `useContext` as first parameter and returns cached context.
export function usePersistedContext(context, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

// Accepts `useReducer` as first parameter and returns cached reducer.
export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
