import InfoComponent from "./components/info";
import MenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import SortComponent from "./components/sort";
import ListDaysComponent from "./components/list";

import {Position, COUNT_WAYPOINTS} from "./consts/constants";

import {render} from "./utility/render";
import {createEvents} from "./utility/event_creator";

import {getWaypointsSet} from "./mock/mock";

const waypointsSet = getWaypointsSet(COUNT_WAYPOINTS);

const tripBlock = document.querySelector(`.trip-main`);
const tripEvents = document.querySelector(`.trip-events`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripControlsFirst = tripControls.children[0];

const init = () => {
  render(tripBlock, new InfoComponent().getElement(), Position.afterbegin);
  render(tripControlsFirst, new MenuComponent().getElement(), Position.afterend);
  render(tripControls, new FilterComponent().getElement());
  render(tripEvents, new SortComponent().getElement());
  render(tripEvents, new ListDaysComponent().getElement());

  const listEvents = document.querySelector(`.trip-events__list`);
  createEvents(listEvents, waypointsSet);
};

init();
