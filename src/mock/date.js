import {getRandomNumber} from "../utility/random_number";
import {MONTHS} from "../consts/constants";

const getRandomDate = () => {
  const date = new Date();
  const random = new Date(getRandomNumber(date.getTime()));
  const coefficient = 1;

  return ({
    fullYear: random.getFullYear(),
    shortYear: random.getFullYear().toString().slice(2),
    monthName: MONTHS[random.getMonth()],
    monthShortName: MONTHS[random.getMonth()].slice(0, 3),
    monthNumber: random.getMonth() + coefficient < 10 ? `0` + (random.getMonth() + coefficient) : random.getMonth() + coefficient,
    day: random.getDate() < 10 ? `0` + random.getDate() : random.getDate(),
    hour: random.getHours() < 10 ? `0` + random.getHours() : random.getHours(),
    min: random.getMinutes() < 10 ? `0` + random.getMinutes() : random.getMinutes(),
    time: random.getTime(),
  });
};

let randomStartDate = getRandomDate();
let randomEndDate = getRandomDate();

if (randomStartDate.time > randomEndDate.time) {
  let temp = randomStartDate;
  randomStartDate = randomEndDate;
  randomEndDate = temp;
}

export {randomStartDate, randomEndDate};
