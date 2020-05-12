import {getDate} from "./list/date";
import AbstractComponent from "./abstraction";

const getListDays = () => {
  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">${getDate()}</div>
      </li>
    </ul>`
  );
};

export default class ListDays extends AbstractComponent {
  getTemplate() {
    return getListDays();
  }
}
