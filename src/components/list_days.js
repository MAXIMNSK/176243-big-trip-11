import AbstractComponent from "./abstraction";

const getListDays = () => `<ul class="trip-days"></ul>`;

export default class ListDaysComponent extends AbstractComponent {
  getTemplate() {
    return getListDays();
  }
}
