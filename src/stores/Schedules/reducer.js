export const reducer = (state, action) => {
  switch (action.type) {
    case "update_schedule": {
      let newWeeklySchedule = [];
      const { id } = action.payload;

      newWeeklySchedule = state.monthlySchedule.weeklySchedule.map((week) => {
        return week.map((schedule) => {
          if (schedule.id === id) {
            return action.payload;
          } else {
            return schedule;
          }
        });
      });

      return {
        monthlySchedule: {
          ...state.monthlySchedule,
          weeklySchedule: newWeeklySchedule,
        },
      };
    }
    case "reset_state": {
      let newState = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export const initialState = [];
