import AbstractComponent from "./abstraction";

const getListEvents = () => `<ul class="trip-events__list"></ul>`;

export default class ListEventsComponent extends AbstractComponent {
  getTemplate() {
    return getListEvents();
  }
}
