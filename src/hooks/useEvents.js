import { useState } from "react";
import { getAllEvents, searchEvent as searchEventRequest } from "../models";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const fetchedEvents = await getAllEvents();
      if (fetchedEvents) setEvents(fetchedEvents);
    } catch (error) {
      console.log("Fail to fetch Events ", error);
    }
  };

  const searchEvent = async (text) => {
    try {
      let fetchedEvents = [];
      if (text.length > 2) {
        fetchedEvents = await searchEventRequest(text);
      } else if (text === "") {
        fetchedEvents = await getAllEvents();
      }
      setEvents(fetchedEvents);
    } catch (error) {
      console.log("Fail to fetch Events ", error);
    }
  };

  return { events, fetchEvents, searchEvent };
}
