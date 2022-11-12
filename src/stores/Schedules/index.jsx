import React from "react";
import { initialState, reducer } from "./reducer";

export const ScheduleContext = React.createContext({
  schedules: initialState,
  dispatch: () => null,
});

export const ScheduleProvider = ({ children }) => {
  const [schedules, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ScheduleContext.Provider value={[schedules, dispatch]}>
      {children}
    </ScheduleContext.Provider>
  );
};
