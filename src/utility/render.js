import {Position} from "../consts/constants";

export const render = (container, element, place = Position.beforeend) => {
  switch (place) {
    case Position.beforebegin:
      container.before(element);
      break;
    case Position.afterbegin:
      container.prepend(element);
      break;
    case Position.beforeend:
      container.append(element);
      break;
    case Position.afterend:
      container.after(element);
      break;
  }
};
