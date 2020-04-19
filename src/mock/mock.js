import {getRandomType} from "./type";
import {getRandomDest} from "./destination";
import {getInfo} from "./info";
import {getRandomDate} from "./date";
import {MAX_PRICE, RENT_PRICE} from "../consts/constants";
import {getDurationTime} from "./duration";
import {getOffer} from "./offer";

const getWaypoint = () => {
  const start = getRandomDate();
  const end = getRandomDate();

  return {
    type: getRandomType(),
    destination: getRandomDest(),
    info: getInfo(),
    photo: `http://picsum.photos/248/152?r=${Math.random()}`,
    dateFrom: start.time < end.time ? start : end,
    dateTo: end.time > start.time ? end : start,
    price: Math.floor(Math.random() * MAX_PRICE),
    rent: Math.floor(Math.random() * RENT_PRICE),
    duration: getDurationTime(),
    offer: getOffer(),
  };
};

const getWaypointsSet = (count) => new Array(count).fill(``).map(() => getWaypoint());

export {getWaypointsSet};
