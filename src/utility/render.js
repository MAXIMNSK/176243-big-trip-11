import {Position} from "../consts/constants";

const render = (container, component, place = Position.beforeend) => {
  switch (place) {
    case Position.beforebegin:
      container.before(component.getElement());
      break;
    case Position.afterbegin:
      container.prepend(component.getElement());
      break;
    case Position.beforeend:
      container.append(component.getElement());
      break;
    case Position.afterend:
      container.after(component.getElement());
      break;
  }
};

export {render};
