import {getDate} from "./date";

export const getListDays = () => {
  return (`
    <ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">${getDate()}</div>
        <ul class="trip-events__list"></ul>
      </li>
    </ul>
  `);
};
