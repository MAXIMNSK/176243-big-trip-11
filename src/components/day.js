import AbstractComponent from "./abstraction";
import {getDate} from "./day/date";

const getDay = () => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">${getDate()}</div>
    </li>`
  );
};

export default class DayComponent extends AbstractComponent {
  getTemplate() {
    return getDay();
  }
}
