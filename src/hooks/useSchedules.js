import { useState } from "react";
import { getAllSchedules } from "../models";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  const fetchSchedules = async () => {
    try {
      const fetchedSchedules = await getAllSchedules();
      if (fetchedSchedules) setSchedules(fetchedSchedules);
    } catch (error) {
      console.log("Fail to fetch Schedules ", error);
    }
  };

  return { schedules, fetchSchedules };
};
