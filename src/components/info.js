import {transform} from "../utility/transformation";

const getTripInfo = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>`
  );
};

export default class Info {
  constructor() {
    this._markupElement = null;
  }

  getTemplate() {
    return getTripInfo();
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
