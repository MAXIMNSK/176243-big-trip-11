import {getRandomType} from "./type";
import {getRandomDest} from "./destination";
import {getInfo} from "./info";
import {randomStartDate, randomEndDate} from "./date";
import {MAX_PRICE, RENT_PRICE} from "../consts/constants";
import {getDurationTime} from "./duration";
import {getOffer} from "./offer";

const getWaypoint = () => {
  return {
    type: getRandomType(),
    destination: getRandomDest(),
    info: getInfo(),
    photo: `http://picsum.photos/248/152?r=${Math.random()}`,
    startFullYear: randomStartDate.fullYear,
    startShortYear: randomStartDate.shortYear,
    startMonthName: randomStartDate.monthName,
    startMonthNumber: randomStartDate.monthNumber,
    startDay: randomStartDate.day,
    startHour: randomStartDate.hour,
    startMin: randomStartDate.min,
    endFullYear: randomEndDate.fullYear,
    endShortYear: randomEndDate.shortYear,
    endMonthName: randomEndDate.monthName,
    endMonthNumber: randomEndDate.monthNumber,
    endDay: randomEndDate.day,
    endHour: randomEndDate.hour,
    endMin: randomEndDate.min,
    price: Math.floor(Math.random() * MAX_PRICE),
    rent: Math.floor(Math.random() * RENT_PRICE),
    duration: getDurationTime(),
    offer: getOffer(),
  };
};

const getWaypointsSet = (count) => new Array(count).fill(``).map(() => getWaypoint());

export {getWaypointsSet};
