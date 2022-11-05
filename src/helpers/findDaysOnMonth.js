export function findDaysOnMonth(day, month, year) {
  let y = parseInt(year);
  let m = parseInt(month) - 1;
  let d = parseInt(day);

  let dateOfDay = [];

  for (let i = 0; i <= new Date(y, m, 0).getDate(); i++) {
    let date = new Date(y, m, i);

    if (date.getDay() == d) {
      dateOfDay.push(date);
    }
  }

  // Log
  console.log(dateOfDay);
  dateOfDay.map(d => console.log(d.getDate()))
}
