import { Button, Divider, Grid } from "@mui/material";
import { default as React, useEffect } from "react";
import { FilterMD, FilterXS, Header, ScheduleList } from "./components";
import { usePersons, useSchedules } from "./hooks";
import { PersonContext, ScheduleContext } from "./stores";

function App() {
  const { schedules: fetchedSchedules, fetchSchedules } = useSchedules();
  const { persons: fetchedPersons, fetchPersons } = usePersons();
  const [persons, dispatchPerson] = React.useContext(PersonContext);
  const [schedules, dispatchSchedule] = React.useContext(ScheduleContext);

  useEffect(() => {
    fetchSchedules();
    fetchPersons();
  }, []);

  useEffect(() => {
    if (fetchedPersons) {
      dispatchPerson({ type: "reset_state", payload: fetchedPersons });
    }
  }, [fetchedPersons]);

  useEffect(() => {
    if (fetchedSchedules) {
      dispatchSchedule({
        type: "reset_state",
        payload: fetchedSchedules,
      });

      // fetchedSchedules.monthlySchedule.weeklySchedule.map((week) => {
      //   week.map((schedule) => {
      //     schedule.persons.map((person) => {
      //       persons.map((p) => {
      //         if (p.id === person.id) {
      //           dispatchPerson({
      //             type: "update_assigned",
      //             payload: {
      //               id: person.id,
      //               type: "increase",
      //             },
      //           });
      //         }
      //       });
      //     });
      //   });
      // });
    }
  }, [fetchedSchedules]);

  return (
    <Grid container spacing={2}>
      <Header />
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid container item spacing={2}>
        <FilterXS />

        <FilterMD />

        {schedules.monthlySchedule && (
          <ScheduleList
            weeklySchedule={schedules.monthlySchedule.weeklySchedule}
          />
        )}
      </Grid>
      <Button
        variant="contained"
        // onClick={migratePersons}
        // onClick={getAllPersonsFB}
      >
        Migrate Person
      </Button>
    </Grid>
  );
}

export default App;
