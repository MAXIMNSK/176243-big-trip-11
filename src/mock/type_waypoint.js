import {getRandomNumber} from "../utility/random_number";

const waypointType = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];

export const getWaypointType = () => waypointType[getRandomNumber(waypointType.length)];
