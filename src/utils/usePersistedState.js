import { useState, useEffect } from "react";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storage = window.localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialState;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
