export const reducer = (state, action) => {
  switch (action.type) {
    case "update_person": {
      let newState = [];
      const { id } = action.payload;

      newState = state.map((person) => {
        if (person.id === id) {
          return action.payload;
        } else {
          return person;
        }
      });
      return newState;
    }
    case "update_assigned": {
      let newState = [];
      const { id, type } = action.payload;

      newState = state.map((person) => {
        if (person.id === id) {
          if (type === "increase") {
            return { ...person, assignedCount: person.assignedCount + 1 };
          } else {
            return { ...person, assignedCount: person.assignedCount - 1 };
          }
        } else {
          return person;
        }
      });
      return newState;
    }
    case "reset_state": {
      let newState = [...action.payload];
      return newState;
    }
    default:
      return state;
  }
};

export const initialState = [];
