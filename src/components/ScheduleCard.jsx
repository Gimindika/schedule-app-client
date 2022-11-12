import DeleteIcon from "@mui/icons-material/Delete";
import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { default as React, useState } from "react";
import { PersonContext, ScheduleContext } from "../stores";

export const ScheduleCard = ({
  id: scheduleId,
  date,
  event,
  persons: personsProp,
}) => {
  const { title } = event;

  const [persons, dispatchPerson] = React.useContext(PersonContext);
  const [schedules, dispatchSchedules] = React.useContext(ScheduleContext);
  const [autoCompleteValue, setAutoCompleteValue] = useState(null);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ p: 2 }}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h5" component="div">
            {title.toUpperCase()}
          </Typography>

          <List dense>
            {personsProp.map((person) => {
              const { profileColor, name, id: personId } = person;

              return (
                <ListItem
                  key={personId}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        dispatchPerson({
                          type: "update_assigned",
                          payload: {
                            id: personId,
                            type: "decrease",
                          },
                        });

                        const newPersons = personsProp.filter(
                          (p) => p.id !== personId
                        );
                        const schedule = {
                          id: scheduleId,
                          date,
                          event,
                          persons: [...newPersons],
                        };
                        dispatchSchedules({
                          type: "update_schedule",
                          payload: schedule,
                        });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <Avatar
                      sx={{
                        bgcolor: profileColor,
                        width: 30,
                        height: 30,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </List>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={persons}
            getOptionLabel={(persons) => persons.name}
            sx={{ width: 300 }}
            value={autoCompleteValue}
            onChange={(e, value, reason) => {
              if (value) {
                dispatchPerson({
                  type: "update_assigned",
                  payload: {
                    id: value.id,
                    type: "increase",
                  },
                });
                const newPersons = [...personsProp];
                const schedule = {
                  id: scheduleId,
                  date,
                  event,
                  persons: [...newPersons, value],
                };
                dispatchSchedules({
                  type: "update_schedule",
                  payload: schedule,
                });
              }
              if (reason === "input") {
                setAutoCompleteValue(null);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Add"
                variant="standard"
                sx={{ maxWidth: 150 }}
              />
            )}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};
