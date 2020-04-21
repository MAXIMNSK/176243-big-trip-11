import {render} from "./render";
import {getDay} from "../components/event";
import {getEditor} from "../components/editor";

const createEditor = (container, count = 1, waypoint) => {
  for (let i = 0; i < count; i++) {
    render(container, getEditor(waypoint));
  }
};

const createEvents = (container, count = 1, waypoint) => {
  for (let i = 1; i < count; i++) {
    render(container, getDay(waypoint[i]));
  }
};

export {createEditor, createEvents};
