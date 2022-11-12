import AddIcon from "@mui/icons-material/AddCircleOutlined";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { default as React, useEffect, useState } from "react";
import { useEvents } from "../hooks";

export const EventList = () => {
  const { events, fetchEvents } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(0);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleListItemClick = (id) => {
    setSelectedEvent(id);
  };

  const EventListItem = ({ event }) => {
    const { id, title } = event;

    return (
      <ListItem key={id}>
        <ListItemButton
          selected={selectedEvent === id}
          onClick={() => handleListItemClick(id)}
        >
          <ListItemText primary={title.toUpperCase()} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <List dense>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="add">
            <AddIcon />
          </IconButton>
        }
      >
        <ListItemButton
          selected={selectedEvent === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary="ALL" />
        </ListItemButton>
      </ListItem>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </List>
  );
};
