import {getTripInfo} from "./components/info";
import {getTripMenu} from "./components/menu";
import {getTripFilters} from "./components/filter";
import {getSortForm} from "./components/sort";
import {getListDays} from "./components/list";

import {TRIP_POINT_COUNT, Position, COUNT_WAYPOINTS, EDITOR_COUNT} from "./consts/constants";

import {render} from "./utility/render";
import {createEvents, createEditor} from "./utility/event_creator";

import {getWaypointsSet} from "./mock/mock";

const waypointsSet = getWaypointsSet(COUNT_WAYPOINTS);

const tripBlock = document.querySelector(`.trip-main`);
const tripEvents = document.querySelector(`.trip-events`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripControlsFirst = tripControls.children[0];

const init = () => {
  render(tripBlock, getTripInfo(), Position.afterbegin);
  render(tripControlsFirst, getTripMenu(), Position.afterend);
  render(tripControls, getTripFilters());
  render(tripEvents, getSortForm());
  render(tripEvents, getListDays());

  const listEvents = document.querySelector(`.trip-events__list`);
  createEditor(listEvents, EDITOR_COUNT, waypointsSet[0]);
  createEvents(listEvents, TRIP_POINT_COUNT, waypointsSet);
};

init();
