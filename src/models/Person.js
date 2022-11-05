let dummyPersons = [
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
    id: "3",
    name: "grace",
    profileColor: "#f736e7",
  },
  {
    id: "4",
    name: "vilin",
    profileColor: "#f7fc4e",
  },
  {
    id: "5",
    name: "cici",
    profileColor: "#32e617",
  },
  {
    id: "6",
    name: "ovine",
    profileColor: "#d1231d",
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
