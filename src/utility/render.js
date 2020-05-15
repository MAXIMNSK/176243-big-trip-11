import {Position} from "../consts/constants";

const insertMarkup = {
  "afterbegin": (container, component) => container.prepend(component.getElement()),
  "beforeend": (container, component) => container.append(component.getElement()),
  "afterend": (container, component) => container.after(component.getElement()),
};

export const render = (container, component, place = Position.beforeend) => insertMarkup[place](container, component);
