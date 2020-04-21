import {types} from "../../mock/type_transfer";

const getMarkup = (element) => {
  return (`
    <div class="event__type-item">
      <input id="event-type-${element}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${element}">
      <label class="event__type-label  event__type-label--${element}" for="event-type-${element}-1">${element}</label>
    </div>`
  );
};

export const getTransferTypes = () => types.map((element) => getMarkup(element)).join(``);
