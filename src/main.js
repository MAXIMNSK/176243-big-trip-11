import {getTripInfo} from "./components/info";
import {getTripMenu} from "./components/menu";
import {getTripFilters} from "./components/filter";
import {getSortForm} from "./components/formSort";
import {getListDays} from "./components/listDays";

import {TRIP_POINT_COUNT, INSERT} from "./consts/constants";

import {render} from "./utility/render";
import {createEvents} from "./utility/createEvent";

const tripBlock = document.querySelector(`.trip-main`);
const tripEvents = document.querySelector(`.trip-events`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripControlsFirst = tripControls.children[0];

/**
 * Функция инициализирует блоки в разметку
 */
const init = () => {
  render(tripBlock, getTripInfo(), INSERT.afterbegin);
  render(tripControlsFirst, getTripMenu(), INSERT.afterend);
  render(tripControls, getTripFilters());
  render(tripEvents, getSortForm());
  render(tripEvents, getListDays());

  const listDays = document.querySelector(`.trip-events__list`);
  createEvents(listDays, TRIP_POINT_COUNT);
};

init();
