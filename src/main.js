import InfoComponent from "./components/info";
import MenuComponent from "./components/menu";
import HeaderFilterComponent from "./components/filter";
import TripController from "./controllers/controller";
import SortComponent from "./components/sort";
import ListDaysComponent from "./components/list_days";

import {Position, COUNT_WAYPOINTS, COUNT_DAYS} from "./consts/constants";
import {render} from "./utility/render";
import {getRandomNumber} from "./utility/random_number";
import {getWaypointsSet} from "./mock/mock";

const waypointsSet = getWaypointsSet(COUNT_WAYPOINTS);

const daysSet = () => {
  return new Array(COUNT_DAYS).fill(``).map(() => {
    return new Array(getRandomNumber(waypointsSet.length)).fill(``).map(() => {
      return waypointsSet[getRandomNumber(waypointsSet.length)];
    });
  });
};

const tripBlock = document.querySelector(`.trip-main`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripControlsFirst = tripControls.children[0];
const tripEvents = document.querySelector(`.trip-events`);

const init = () => {
  const infoComponent = new InfoComponent();
  const menuComponent = new MenuComponent();
  const headerFilterComponent = new HeaderFilterComponent();
  const sortComponent = new SortComponent();
  const listDaysComponent = new ListDaysComponent();
  const controller = new TripController(listDaysComponent);

  render(tripBlock, infoComponent, Position.afterbegin);
  render(tripControlsFirst, menuComponent, Position.afterend);
  render(tripControls, headerFilterComponent);
  render(tripEvents, sortComponent);
  render(tripEvents, listDaysComponent);

  controller.render(daysSet());
};

init();
