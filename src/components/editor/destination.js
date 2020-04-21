import {destinationPoints} from "../../mock/destination_list";

const getMarkup = (element) => {
  return (`
    <option value="${element}"></option>
  `);
};

export const getDestinationPoints = () => destinationPoints.map((element) => getMarkup(element)).join(``);
