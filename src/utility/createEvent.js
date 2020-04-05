import {render} from "../utility/render";
import {getDay} from "../components/day";

/**
 * Заполяем список событий поездки
 * @param {*} container элемент в который мы рендерим возвращаемое функцией значение
 * @param {number} count передаём количество экспортируемых элементов
 */
export const createEvents = (container, count) => {
  for (let i = 0; i < count; i++) {
    render(container, getDay());
  }
};
