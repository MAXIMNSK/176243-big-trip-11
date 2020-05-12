import {render} from "../utility/render";
import {replace} from "../utility/replace";
import {Position} from "../consts/constants";

import EditorEventComponent from "../components/editor";
import EventComponent from "../components/event";
import ListEventsComponent from "../components/list_events";
import SortComponent from "../components/sort";
import ListDaysComponent from "../components/list_days";

function showBtnHundler(eventComponent, editorComponent) {
  eventComponent.clickHandler(() => {
    replace(editorComponent, eventComponent);
  });
}

function hideBtnHundler(eventComponent, editorComponent) {
  editorComponent.clickHandler(() => {
    replace(eventComponent, editorComponent);
  });
}

function buildEvent(place, tripEvent) {
  const eventComponent = new EventComponent(tripEvent);
  const editorComponent = new EditorEventComponent(tripEvent);

  showBtnHundler(eventComponent, editorComponent);
  hideBtnHundler(eventComponent, editorComponent);

  render(place, eventComponent);
}

export default class TripController {
  constructor(container) {
    this._container = container;
    this._sortComponent = new SortComponent();
    this._listDaysComponent = new ListDaysComponent();
    this._listEventsComponent = new ListEventsComponent();
  }

  render(waypointsSet) {
    const mainContentConainer = document.querySelector(`.page-body__page-main`).querySelector(`.page-body__container`);
    render(mainContentConainer, this._container, Position.afterbegin);

    const tripEvents = document.querySelector(`.trip-events`);
    render(tripEvents, this._sortComponent);
    render(tripEvents, this._listDaysComponent);

    const tripDaysList = document.querySelectorAll(`.trip-days__item`);
    render(tripDaysList[0], this._listEventsComponent);

    const tripEventsList = document.querySelector(`.trip-events__list`);

    waypointsSet.forEach((tripEvent) => buildEvent(tripEventsList, tripEvent));
  }
}
