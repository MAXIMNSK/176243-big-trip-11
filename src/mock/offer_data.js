import {getRandomNumber} from "../utility/random_number";

const OFFER_PRICE = 500;
const listFullNames = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];
const listShortNames = [`luggage`, `comfort`, `meal`, `seats`, `train`];

const getOffersData = () => new Array(listFullNames.length).fill(``).map((element, index) => ({
  fullName: listFullNames[index],
  shortName: listShortNames[index],
  price: getRandomNumber(OFFER_PRICE),
}));

export {getOffersData};
