import AddIcon from "@mui/icons-material/AddCircleOutlined";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { default as React, useState } from "react";
import { PersonContext } from "../stores/Person";

export const PersonList = () => {
  const [persons] = React.useContext(PersonContext);
  const [selectedPerson, setSelectedPerson] = useState(0);

  const handleListItemClick = (id) => {
    setSelectedPerson(id);
  };

  const PersonListItem = ({ person }) => {
    const { id, name, profileColor, assignedCount } = person;

    return (
      <ListItem key={id}>
        <ListItemButton
          selected={selectedPerson === id}
          onClick={() => handleListItemClick(id)}
        >
          <ListItemIcon>
            <Avatar sx={{ bgcolor: profileColor, color: "black" }}>
              {assignedCount
                ? assignedCount
                : `${name[0].toUpperCase()}${name[1]}`}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <List dense sx={{ width: "100%", height: "50vh", overflow: "auto" }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="add">
            <AddIcon />
          </IconButton>
        }
      >
        <ListItemButton
          selected={selectedPerson === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary="ALL" />
        </ListItemButton>
      </ListItem>
      {persons.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </List>
  );
};
