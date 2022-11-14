// scheduleData = {
//   monthyear: {
//     week: [
//       {
//         date,
//         event : {
//           id,
//           title,
//         },
//         persons : [
//           {
//             id,
//             name,
//             profileColor
//           }
//         ]
//       }
//     ]
//   }
// }

const dummySchedules = {
  monthlySchedule: {
    id: 1,
    month: "11",
    year: "2022",
    weeklySchedule: [
      [
        {
          id: 1,
          date: "05-11-2022",
          event: {
            id: 1,
            title: "fresh",
          },
          persons: [
            {
              id: "7",
              name: "dellin",
              profileColor: "#FFDDD2",
            },
            {
              id: "8",
              name: "yemima",
              profileColor: "#FFDDD2",
            },
            {
              id: "9",
              name: "kila",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 2,
          date: "06-11-2022",
          event: {
            id: 2,
            title: "rise",
          },
          persons: [
            {
              id: "23",
              name: "cika",
              profileColor: "#FFDDD2",
            },
            {
              id: "20",
              name: "rizpa",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 3,
          date: "06-11-2022",
          event: {
            id: 3,
            title: "ibadah raya 1",
          },
          persons: [
            {
              id: "14",
              name: "ivine",
              profileColor: "#FFDDD2",
            },
            {
              id: "15",
              name: "clara",
              profileColor: "#FFDDD2",
            },
            {
              id: "13",
              name: "angelina",
              profileColor: "#FFDDD2",
            },
            {
              id: "16",
              name: "stevy",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 4,
          date: "06-11-2022",
          event: {
            id: "4",
            title: "ibadah raya 2",
          },
          persons: [
            {
              id: "1",
              name: "gabby",
              profileColor: "#B8E8FC",
            },
            {
              id: "4",
              name: "vilin",
              profileColor: "#B1AFFF",
            },
          ],
        },
        {
          id: 5,
          date: "06-11-2022",
          event: {
            id: "5",
            title: "ibadah raya 3",
          },
          persons: [
            {
              id: "2",
              name: "audy",
              profileColor: "#FDFDBD",
            },
            {
              id: "6",
              name: "ovine",
              profileColor: "#FFDDD2",
            },
          ],
        },
      ],
      // w2
      [
        {
          id: 6,
          date: "12-11-2022",
          event: {
            id: 1,
            title: "fresh",
          },
          persons: [
            {
              id: "10",
              name: "pinkan",
              profileColor: "#FFDDD2",
            },
            {
              id: "2",
              name: "audy",
              profileColor: "#FDFDBD",
            },
            {
              id: "24",
              name: "elin",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 7,
          date: "13-11-2022",
          event: {
            id: 2,
            title: "rise",
          },
          persons: [
            {
              id: "3",
              name: "grace",
              profileColor: "#C8FFD4",
            },
            {
              id: "13",
              name: "angelina",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 8,
          date: "13-11-2022",
          event: {
            id: 3,
            title: "ibadah raya 1",
          },
          persons: [
            {
              id: "17",
              name: "sharon",
              profileColor: "#FFDDD2",
            },
            {
              id: "5",
              name: "cici",
              profileColor: "#FFB9B9",
            },
            {
              id: "9",
              name: "kila",
              profileColor: "#FFDDD2",
            },
            {
              id: "7",
              name: "dellin",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 9,
          date: "13-11-2022",
          event: {
            id: "4",
            title: "ibadah raya 2",
          },
          persons: [
            {
              id: "8",
              name: "yemima",
              profileColor: "#FFDDD2",
            },
            {
              id: "12",
              name: "angel",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 10,
          date: "13-11-2022",
          event: {
            id: "5",
            title: "ibadah raya 3",
          },
          persons: [
            {
              id: "14",
              name: "ivine",
              profileColor: "#FFDDD2",
            },
            {
              id: "18",
              name: "eunike",
              profileColor: "#FFDDD2",
            },
          ],
        },
      ],
      // w3
      [
        {
          id: 11,
          date: "19-11-2022",
          event: {
            id: 1,
            title: "fresh",
          },
          persons: [
            {
              id: "19",
              name: "rachel",
              profileColor: "#FFDDD2",
            },
            {
              id: "13",
              name: "angelina",
              profileColor: "#FFDDD2",
            },
            {
              id: "18",
              name: "eunike",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 12,
          date: "20-11-2022",
          event: {
            id: 2,
            title: "rise",
          },
          persons: [
            {
              id: "9",
              name: "kila",
              profileColor: "#FFDDD2",
            },
            {
              id: "20",
              name: "rizpa",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 13,
          date: "20-11-2022",
          event: {
            id: 3,
            title: "ibadah raya 1",
          },
          persons: [
            {
              id: "2",
              name: "audy",
              profileColor: "#FDFDBD",
            },
            {
              id: "1",
              name: "gabby",
              profileColor: "#B8E8FC",
            },
            {
              id: "22",
              name: "aleycia",
              profileColor: "#FFDDD2",
            },
            {
              id: "10",
              name: "pinkan",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 14,
          date: "20-11-2022",
          event: {
            id: "4",
            title: "ibadah raya 2",
          },
          persons: [
            {
              id: "15",
              name: "clara",
              profileColor: "#FFDDD2",
            },
            {
              id: "21",
              name: "vina",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 15,
          date: "20-11-2022",
          event: {
            id: "5",
            title: "ibadah raya 3",
          },
          persons: [
            {
              id: "4",
              name: "vilin",
              profileColor: "#B1AFFF",
            },
            {
              id: "16",
              name: "stevy",
              profileColor: "#FFDDD2",
            },
          ],
        },
      ],
      [
        {
          id: 16,
          date: "26-11-2022",
          event: {
            id: 1,
            title: "fresh",
          },
          persons: [
            {
              id: "5",
              name: "cici",
              profileColor: "#FFB9B9",
            },
            {
              id: "24",
              name: "elin",
              profileColor: "#FFDDD2",
            },
            {
              id: "3",
              name: "grace",
              profileColor: "#C8FFD4",
            },
          ],
        },
        {
          id: 17,
          date: "27-11-2022",
          event: {
            id: 2,
            title: "rise",
          },
          persons: [
            {
              id: "12",
              name: "angel",
              profileColor: "#FFDDD2",
            },
            {
              id: "7",
              name: "dellin",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 18,
          date: "27-11-2022",
          event: {
            id: 3,
            title: "ibadah raya 1",
          },
          persons: [
            {
              id: "19",
              name: "rachel",
              profileColor: "#FFDDD2",
            },
            {
              id: "17",
              name: "sharon",
              profileColor: "#FFDDD2",
            },
            {
              id: "23",
              name: "cika",
              profileColor: "#FFDDD2",
            },
            {
              id: "18",
              name: "eunike",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 19,
          date: "27-11-2022",
          event: {
            id: "4",
            title: "ibadah raya 2",
          },
          persons: [
            {
              id: "6",
              name: "ovine",
              profileColor: "#FFDDD2",
            },
            {
              id: "20",
              name: "rizpa",
              profileColor: "#FFDDD2",
            },
          ],
        },
        {
          id: 20,
          date: "27-11-2022",
          event: {
            id: "5",
            title: "ibadah raya 3",
          },
          persons: [
            {
              id: "21",
              name: "vina",
              profileColor: "#FFDDD2",
            },
            {
              id: "22",
              name: "aleycia",
              profileColor: "#FFDDD2",
            },
          ],
        },
      ],
    ],
  },
};

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
  dummySchedules = dummySchedules.map((s) => {
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


