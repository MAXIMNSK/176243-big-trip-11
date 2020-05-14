import {render} from "../utility/render";
import {replace} from "../utility/replace";

import EditorEventComponent from "../components/editor";
import EventComponent from "../components/event";
import ListEventsComponent from "../components/list_events";
import DayComponent from "../components/day";

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

function renderEvent(eventsList, eventsOfDay) {
  eventsOfDay.map((currentEvent) => {
    const eventComponent = new EventComponent(currentEvent);
    const eventEditorComponent = new EditorEventComponent(currentEvent);

    showBtnHundler(eventComponent, eventEditorComponent);
    hideBtnHundler(eventComponent, eventEditorComponent);

    render(eventsList, eventComponent);
  });
}

function renderListEvents(container, indexOfDay, currentArray) {
  const eventsListComponent = new ListEventsComponent(currentArray[indexOfDay]);
  currentArray[indexOfDay].map(() => render(container, eventsListComponent));

  renderEvent(eventsListComponent.getElement(), currentArray[indexOfDay]);
}

function renderDays(listDays, day, indexOfDay, currentArray) {
  const newDayComponent = new DayComponent(day);
  render(listDays, newDayComponent);

  renderListEvents(newDayComponent.getElement(), indexOfDay, currentArray);
}

export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(filledSetDays) {
    const listDays = this._container.getElement();
    filledSetDays.map((day, indexOfDay, currentArray) => {
      if (currentArray[indexOfDay].length > 0) {
        renderDays(listDays, day, indexOfDay, currentArray);
      }
    });
  }
}
