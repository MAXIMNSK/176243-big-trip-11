import {getDate} from "./list/date";
import {transform} from "../utility/transformation";

const getListDays = () => {
  return (
    `<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">${getDate()}</div>
        <ul class="trip-events__list"></ul>
      </li>
    </ul>`
  );
};

export default class ListDays {
  constructor() {
    this._markupElement = null;
  }

  getTemplate() {
    return getListDays();
  }

  getElement() {
    if (this._markupElement !== true) {
      this._markupElement = transform(this.getTemplate());
    }

    return this._markupElement;
  }

  resetVariable() {
    this._markupElement = null;
  }
}
