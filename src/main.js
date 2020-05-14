import InfoComponent from "./components/info";
import MenuComponent from "./components/menu";
import HeaderFilterComponent from "./components/filter";
import TripController from "./controllers/controller";
import SortComponent from "./components/sort";
import ListDaysComponent from "./components/list_days";

import {Position, COUNT_WAYPOINTS, COUNT_DAYS} from "./consts/constants";
import {render} from "./utility/render";
import {getWaypointsSet} from "./mock/mock";

const waypointsSet = getWaypointsSet(COUNT_WAYPOINTS);

function fillDays() {
  return new Array(Math.floor(Math.random() * waypointsSet.length)).fill(``).map(() => waypointsSet[Math.floor(Math.random() * waypointsSet.length)]);
}

function getDays() {
  return new Array(COUNT_DAYS).fill(``).map(() => fillDays());
}

const filledDaysSet = getDays();

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

  controller.render(filledDaysSet);
};

init();
