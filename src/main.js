import {getTripInfo} from "./components/info";
import {getTripMenu} from "./components/menu";
import {getTripFilters} from "./components/filter";
import {getSortForm} from "./components/sortform";
import {getListDays} from "./components/listdays";
import {getDay} from "./components/day";

const TRIP_POINT_COUNT = 3;

const tripBlock = document.querySelector(`.trip-main`);
const tripEvents = document.querySelector(`.trip-events`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripControlsFirst = tripControls.children[0];

/**
 * Функция рендерит в разметку входные данные в виде строки
 * @param {*} container целевой блок в который будет рендерится шаблон
 * @param {*} template шаблон который функция рендерит
 * @param {*} place передаём позицию добавляемого элемента. Значение по умолчанию beforeend
 * @return {*} возвращает результат выполнения функции
 */
const render = (container, template, place = `beforeend`) => container.insertAdjacentHTML(place, template);

/**
 * Заполяем список событий поездки
 * @param {*} container элемент в который мы рендерим возвращаемое функцией значение
 * @param {number} count передаём количество экспортируемых элементов
 */
const createEvents = (container, count) => {
  for (let i = 0; i < count; i++) {
    render(container, getDay());
  }
};

/**
 * Функция инициализирует блоки в разметку
 */
const init = () => {
  render(tripBlock, getTripInfo(), `afterbegin`);
  render(tripControlsFirst, getTripMenu(), `afterend`);
  render(tripControls, getTripFilters());
  render(tripEvents, getSortForm());
  render(tripEvents, getListDays());

  const listDays = document.querySelector(`.trip-events__list`);
  createEvents(listDays, TRIP_POINT_COUNT);
};

init();
