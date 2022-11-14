import { useState } from "react";
import { getAllPersons, searchPerson as searchPersonRequest } from "../models";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    try {
      const fetchedPersons = await getAllPersons();
      if (fetchedPersons) setPersons(fetchedPersons);
    } catch (error) {
      console.log("Fail to fetch Persons ", error);
    }
  };

  // const searchPerson = async (text) => {
  //   try {
  //     let fetchedPersons = [];
  //     if (text.length > 2) {
  //       fetchedPersons = await searchPersonRequest(text);
  //     } else if (text === "") {
  //       fetchedPersons = await getAllPersons();
  //     }
  //     setPersons(fetchedPersons);
  //   } catch (error) {
  //     console.log("Fail to fetch Persons ", error);
  //   }
  // };

  return { persons, fetchPersons };
};
