import {render} from "./render";
import EditorEventComponent from "../components/editor";
import EventComponent from "../components/event";

function hideBtnHundler(place, instanceEvent, hideBtn, instanceEditor) {
  hideBtn.addEventListener(`click`, function () {
    place.replaceChild(instanceEvent, instanceEditor);
  });
}

function showBtnHundler(place, instanceEvent, showBtn, instanceEditor) {
  showBtn.addEventListener(`click`, function () {
    place.replaceChild(instanceEditor, instanceEvent);
  });
}

const buildEvent = (place, element) => {
  const instanceEvent = new EventComponent(element).getElement();
  const showBtn = instanceEvent.querySelector(`.event__rollup-btn`);

  const instanceEditor = new EditorEventComponent(element).getElement();
  const hideBtn = instanceEditor.querySelector(`.event__rollup-btn`);

  showBtnHundler(place, instanceEvent, showBtn, instanceEditor);
  hideBtnHundler(place, instanceEvent, hideBtn, instanceEditor);

  render(place, instanceEvent);
};

const createEvents = (place, eventSet) => {
  eventSet.forEach((element) => buildEvent(place, element));
};

export {createEvents};
