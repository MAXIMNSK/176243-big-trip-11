/**
 * Функция возвращает секцию вёрстки в виде строки
 * @return {string} возвращает блок разметки
 */
export const getTripMenu = () => {
  return (`
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>
`);
};
