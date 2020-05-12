// import {render, renderEvent} from "./render";
// import EditorEventComponent from "../components/editor";
// import EventComponent from "../components/event";
// import {replace} from "./replace";

// function showBtnHundler(place, showBtn, instanceEvent, instanceEditor) {
//   showBtn.addEventListener(`click`, function () {
//     replace(place, instanceEditor, instanceEvent);
//   });
// }

// function hideBtnHundler(place, hideBtn, instanceEvent, instanceEditor) {
//   hideBtn.addEventListener(`click`, function () {
//     replace(place, instanceEvent, instanceEditor);
//   });
// }

// const buildEvent = (place, tripEvent) => {
//   const eventComponent = new EventComponent(tripEvent);
//   const instanceEvent = eventComponent.getElement();
//   const showBtn = instanceEvent.querySelector(`.event__rollup-btn`);

//   const editorComponent = new EditorEventComponent(tripEvent);
//   const instanceEditor = editorComponent.getElement();
//   const hideBtn = instanceEditor.querySelector(`.event__rollup-btn`);

//   showBtnHundler(place, showBtn, instanceEvent, instanceEditor);
//   hideBtnHundler(place, hideBtn, instanceEvent, instanceEditor);

//   render(place, eventComponent);
// };

// const createEvents = (place, eventSet) => {
//   eventSet.forEach((tripEvent) => buildEvent(place, tripEvent));
// };

// export {createEvents};
