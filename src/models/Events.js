let dummyEvents = [
  {
    id: "1",
    title: "fresh",
    days: [6],
  },
  {
    id: "2",
    title: "rise",
    days: [0],
  },
  {
    id: "3",
    title: "ibadah raya 1",
    days: [0],
  },
  {
    id: "4",
    title: "ibadah raya 2",
    days: [0],
  },
  {
    id: "5",
    title: "ibadah raya 3",
    days: [0],
  },
];

export const getAllEvents = () => {
  return dummyEvents;
};

export const getEventsLength = () => {
  return dummyEvents.length;
};

export const getEventsById = (id) => {
  return dummyEvents.find((e) => e.id === id);
};

export const searchEvent = (searchText) => {
  const filteredEvents = dummyEvents.filter(
    (event) => event.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  );
  return filteredEvents;
};

export const insertEvent = (event) => {
  dummyEvents.push(event);
  return event;
};

export const updateEvent = (event) => {
  dummyEvents = dummyEvents.map((e) => {
    if (e.id !== event.id) {
      return e;
    } else {
      return event;
    }
  });
  return event;
};

export const deleteEvent = (id) => {
  dummyEvents = dummyEvents.filter((e) => e.id !== id);
  return id;
};
