import { Divider, Grid, Typography } from "@mui/material";
import { default as React } from "react";
import { ScheduleCard } from "./index";

export const ScheduleList = ({ weeklySchedule }) => {
  return (
    <Grid item container xs={12} md={8}>
      {weeklySchedule.map((week, index) => {
        return (
          <React.Fragment key={`week${index}`}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Typography variant="h5" component="div" align="center" mt={2}>
                  Week {index + 1}
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                {week.map((w, index) => {
                  const { id, date, event, persons } = w;
                  return (
                    <ScheduleCard
                      date={date}
                      event={event}
                      persons={persons}
                      id={id}
                      key={`${id}`}
                    />
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
