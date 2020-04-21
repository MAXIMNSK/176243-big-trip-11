import {getRandomNumber} from "../utility/random_number";
import {destinationPoints} from "./destination_list";

export const getRandomDest = () => destinationPoints[getRandomNumber(destinationPoints.length)];
