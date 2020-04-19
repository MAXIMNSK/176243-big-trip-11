import {getRandomNumber} from "../utility/randomnumber";
import {MONTHS} from "../consts/constants";

const getRandomDate = () => {
  const date = new Date();
  const random = new Date(getRandomNumber(date.getTime()));

  return ({
    year: random.getFullYear(),
    month: MONTHS[random.getMonth()],
    day: random.getDate() < 10 ? `0` + random.getDate() : random.getDate(),
    hour: random.getHours() < 10 ? `0` + random.getHours() : random.getHours(),
    min: random.getMinutes() < 10 ? `0` + random.getMinutes() : random.getMinutes(),
    time: random.getTime(),
  });
};

export {getRandomDate};
