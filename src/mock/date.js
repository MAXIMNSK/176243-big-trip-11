import {getRandomNumber} from "../utility/randomnumber";
import {MONTHS} from "../consts/constants";

const getRandomDate = () => {
  const date = new Date();
  const random = new Date(getRandomNumber(date.getTime()));

  return ({
    fullYear: random.getFullYear(),
    shortYear: random.getFullYear().toString().slice(2),
    monthName: MONTHS[random.getMonth()],
    monthNumber: random.getMonth() < 10 ? `0` + random.getMonth() : random.getMonth(),
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
