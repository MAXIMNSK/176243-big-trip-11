export const getDay = (waypoint) => {
  const {
    type,
    destination,
    photo,
    startFullYear,
    startMonthName,
    startDay,
    startHour,
    startMin,
    endFullYear,
    endMonthName,
    endDay,
    endHour,
    endMin,
    price,
    rent,
    duration,
  } = waypoint;

  const {min, hour, day} = duration;

  return (`
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${photo}" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} to ${destination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${startFullYear}-${startMonthName}-${startDay}T${startHour}:${startMin}">${startHour}:${startMin}</time>
            &mdash;
            <time class="event__end-time" datetime="${endFullYear}-${endMonthName}-${endDay}T${endHour}:${endMin}">${endHour}:${endMin}</time>
          </p>
          <p class="event__duration">${+day !== 0 ? day + `D` : ``} ${+hour === 0 && +day !== 0 || +hour !== 0 && +day !== 0 || +hour !== 0 ? hour + `H` : ``} ${min + `M`}</p>
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
