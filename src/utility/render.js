import {Position} from "../consts/constants";

export const render = (container, template, place = Position.beforeend) => container.insertAdjacentHTML(place, template);
