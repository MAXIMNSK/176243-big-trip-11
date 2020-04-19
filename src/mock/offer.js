import {OFFER_PRICE} from "../consts/constants";

export const getOffer = () => ({
  luggage: Math.floor(Math.random() * OFFER_PRICE),
  comfort: Math.floor(Math.random() * OFFER_PRICE),
  meal: Math.floor(Math.random() * OFFER_PRICE),
  seats: Math.floor(Math.random() * OFFER_PRICE),
  train: Math.floor(Math.random() * OFFER_PRICE),
});
