import {transform} from "../utility/transformation";

const getTripMenu = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};

export default class Menu {
  constructor() {
    this._markupElement = null;
  }

  getTemplate() {
    return getTripMenu();
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
