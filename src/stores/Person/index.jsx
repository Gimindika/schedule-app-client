import React from "react";
import { reducer, initialState } from "./reducer";

export const PersonContext = React.createContext({
  persons: initialState,
  dispatch: () => null,
});

export const PersonProvider = ({ children }) => {
  const [persons, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PersonContext.Provider value={[persons, dispatch]}>
      {children}
    </PersonContext.Provider>
  );
};
