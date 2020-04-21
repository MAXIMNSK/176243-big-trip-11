import {randomStartDate} from "../mock/date";

export const getDate = () => {
  const {fullYear, monthShortName, monthNumber, day} = randomStartDate;

  return (`
    <span class="day__counter">1</span>
    <time class="day__date" datetime="${fullYear}-${monthNumber}-${day}">${monthShortName} ${day}</time>
  `);
};
