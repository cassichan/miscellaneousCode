const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 11;
      break;
    case "sunday":
      return 10;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
if (actualSleepHours === idealSleepHours) {
  console.log ("You slept the perfect amount of sleep this week.");
}
  else if (actualSleepHours > idealSleepHours) {
    console.log ("You got " + actualSleepHours - IdealSleepHours + "more hours of sleep than you needed this week. Too much sleep");
  }