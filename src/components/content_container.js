import AbstractComponent from "./abstraction";

const getContentContainer = () => {
  return (
    `<section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
      <!-- Сортировка -->
      <!-- Контент -->
    </section>`
  );
};

export default class ContentContainer extends AbstractComponent {
  getTemplate() {
    return getContentContainer();
  }
}
