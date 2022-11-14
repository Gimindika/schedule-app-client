import { async } from "@firebase/util";
import {
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../services/firebase";

// export const migratePersons = () => {
//   dummyPersons.forEach(async (person) => {
//     try {
//       const newPerson = { ...person };
//       delete newPerson.id;
//       const docRef = await addDoc(collection(db, "persons"), {
//         ...newPerson,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   });
// };

export const getAllPersons = async () => {
  const querySnapshot = await getDocs(collection(db, "persons"));
  const persons = [];
  querySnapshot.forEach((person) => {
    persons.push({ id: person.id, ...person.data() });
  });
  return persons;
};
