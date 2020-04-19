import {getRandomNumber} from "../utility/randomnumber";

const waypointType = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];

export const getRandomType = () => waypointType[getRandomNumber(waypointType.length)];
