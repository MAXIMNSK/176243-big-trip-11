export const getDay = (waypoint) => {
  const {type, destination, photo, dateFrom, dateTo, price, rent, duration} = waypoint;

  const durationMin = duration.min < 10 ? `0` + duration.min + `M` : duration.min + `M`;
  let durationHour = ``;
  let durationDay = ``;

  if (duration.hour === 0 && duration.day !== 0) {
    durationHour = duration.hour < 10 ? `0` + duration.hour + `H` : duration.hour + `H`;
  } else if (duration.hour !== 0 && duration.day !== 0) {
    durationHour = duration.hour < 10 ? `0` + duration.hour + `H` : duration.hour + `H`;
  } else if (duration.hour !== 0 && duration.day === 0) {
    durationHour = duration.hour < 10 ? `0` + duration.hour + `H` : duration.hour + `H`;
  }

  if (duration.day !== 0) {
    durationDay = duration.day < 10 ? `0` + duration.day + `D` : duration.day + `D`;
  }

  return (`
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${photo}" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} to ${destination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom.year}-${dateFrom.month}-${dateFrom.day}T${dateFrom.hour}:${dateFrom.min}">${dateFrom.hour}:${dateFrom.min}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo.year}-${dateTo.month}-${dateTo.day}T${dateTo.hour}:${dateTo.min}">${dateTo.hour}:${dateTo.min}</time>
          </p>
          <p class="event__duration">${durationDay} ${durationHour} ${durationMin}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Rent a car</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${rent}</span>
          </li>
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
};
