let dummySchedules = [
  {
    id: "1",
    week: 1,
    date: 15,
    month: 10,
    year: 2022,
    event: {
      id: "1",
      title: "fresh",
    },
    persons: [
      {
        id: "1",
        name: "gabby",
        profileColor: "#28e0ed",
      },
      {
        id: "2",
        name: "angel",
        profileColor: "#0400f2",
      },
      {
        id: "4",
        name: "vilin",
        profileColor: "#f7fc4e",
      },
    ],
  },
];

export const getAllSchedules = () => {
  return dummySchedules;
};

export const getSchedulesLength = () => {
  return dummySchedules.length;
};

export const getSchedulesById = (id) => {
  return dummySchedules.find((s) => s.id === id);
};

export const searchSchedule = (searchText) => {
  const filteredSchedules = dummySchedules.filter(
    (schedule) =>
      schedule.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  );
  return filteredSchedules;
};

export const insertSchedule = (schedule) => {
  dummySchedules.push(schedule);
  return schedule;
};

export const updateSchedule = (schedule) => {
  dummySchedules = dummySchedules.map((p) => {
    if (s.id !== schedule.id) {
      return s;
    } else {
      return schedule;
    }
  });
  return schedule;
};

export const deleteSchedule = (id) => {
  dummySchedules = dummySchedules.filter((p) => p.id !== id);
  return id;
};
