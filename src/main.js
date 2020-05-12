import InfoComponent from "./components/info";
import MenuComponent from "./components/menu";
import FilterComponent from "./components/filter";
import TripController from "./controllers/controller";
import ContentContainer from "./components/content_container";

import {Position, COUNT_WAYPOINTS} from "./consts/constants";
import {render} from "./utility/render";
import {getWaypointsSet} from "./mock/mock";

const waypointsSet = getWaypointsSet(COUNT_WAYPOINTS);

const init = () => {
  let mainContentContainer = document.querySelector(`.trip-events`);
  mainContentContainer.remove();

  const tripBlock = document.querySelector(`.trip-main`);
  const tripControls = document.querySelector(`.trip-main__trip-controls`);
  const tripControlsFirst = tripControls.children[0];

  const infoComponent = new InfoComponent();
  const menuComponent = new MenuComponent();
  const filterComponent = new FilterComponent();
  mainContentContainer = new ContentContainer();
  const controller = new TripController(mainContentContainer);

  render(tripBlock, infoComponent, Position.afterbegin);
  render(tripControlsFirst, menuComponent, Position.afterend);
  render(tripControls, filterComponent);

  controller.render(waypointsSet);
};

init();
