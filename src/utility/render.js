import {Position} from "../consts/constants";

const render = (container, component, place = Position.beforeend) => {
  const dictionary = {
    "beforebegin": () => container.before(component.getElement()),
    "afterbegin": () => container.prepend(component.getElement()),
    "beforeend": () => container.append(component.getElement()),
    "afterend": () => container.after(component.getElement()),
  };

  dictionary[place]();
};

export {render};
