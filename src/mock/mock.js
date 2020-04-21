import {getWaypointType} from "./type_waypoint";
import {getRandomDest} from "./destination_generator";
import {getInfo} from "./info";
import {randomStartDate, randomEndDate} from "./date";
import {MAX_PRICE, RENT_PRICE} from "../consts/constants";
import {getDurationTime} from "./duration";
import {getPhoto} from "./photo_generator";

const getWaypoint = () => {
  return {
    type: getWaypointType(),
    destination: getRandomDest(),
    info: getInfo(),
    photo: getPhoto(),
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
  };
};

const getWaypointsSet = (count) => new Array(count).fill(``).map(() => getWaypoint());

export {getWaypointsSet};