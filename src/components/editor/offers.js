import {getOffersData} from "../../mock/offer_data";

const getMarkup = (element) => {
  const {fullName, shortName, price} = element;
  const isChecked = Math.random() > 0.5;

  return (`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${shortName}-1" type="checkbox" name="event-offer-${shortName}" ${isChecked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${shortName}-1">
        <span class="event__offer-title">${fullName}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `);
};

export const getOffers = () => getOffersData().map((element) => getMarkup(element)).join(``);
