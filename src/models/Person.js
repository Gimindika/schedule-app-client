let dummyPersons = [
  {
    id: "1",
    name: "gabby",
    profileColor: "#B8E8FC",
    assignedCount: 0,
  },
  {
    id: "2",
    name: "audy",
    profileColor: "#FDFDBD",
    assignedCount: 0,
  },
  {
    id: "3",
    name: "grace",
    profileColor: "#C8FFD4",
    assignedCount: 0,
  },
  {
    id: "4",
    name: "vilin",
    profileColor: "#B1AFFF",
    assignedCount: 0,
  },
  {
    id: "5",
    name: "cici",
    profileColor: "#FFB9B9",
    assignedCount: 0,
  },
  {
    id: "6",
    name: "ovine",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "7",
    name: "dellin",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "8",
    name: "yemima",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "9",
    name: "kila",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "10",
    name: "pinkan",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "12",
    name: "angel",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "13",
    name: "angelina",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "14",
    name: "ivine",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "15",
    name: "clara",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "16",
    name: "stevy",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "17",
    name: "sharon",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "18",
    name: "eunike",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "19",
    name: "rachel",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "20",
    name: "rizpa",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "21",
    name: "vina",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "22",
    name: "aleycia",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "23",
    name: "cika",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
  {
    id: "24",
    name: "elin",
    profileColor: "#FFDDD2",
    assignedCount: 0,
  },
];

export const getAllPersons = () => {
  return dummyPersons;
};

export const getPersonsLength = () => {
  return dummyPersons.length;
};

export const getPersonsById = (id) => {
  return dummyPersons.find((p) => p.id === id);
};

export const searchPerson = (searchText) => {
  const filteredPersons = dummyPersons.filter(
    (person) =>
      person.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  );
  return filteredPersons;
};

export const insertPerson = (person) => {
  dummyPersons.push(person);
  return person;
};

export const updatePerson = (person) => {
  dummyPersons = dummyPersons.map((p) => {
    if (p.id !== person.id) {
      return p;
    } else {
      return person;
    }
  });
  return person;
};

export const deletePerson = (id) => {
  dummyPersons = dummyPersons.filter((p) => p.id !== id);
  return id;
};
