import {getRandomNumber} from "../utility/randomnumber";

const cities = [`Tokyo`, `LA`, `Reykjavík`];
export const getRandomDest = () => cities[getRandomNumber(cities.length)];
