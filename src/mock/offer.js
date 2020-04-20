import {OFFER_PRICE} from "../consts/constants";

export const getOffer = () => ({
  luggagePrice: Math.floor(Math.random() * OFFER_PRICE),
  comfortPrice: Math.floor(Math.random() * OFFER_PRICE),
  mealPrice: Math.floor(Math.random() * OFFER_PRICE),
  seatsPrice: Math.floor(Math.random() * OFFER_PRICE),
  trainPrice: Math.floor(Math.random() * OFFER_PRICE),
});
