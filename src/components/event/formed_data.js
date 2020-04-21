const getFormedDuration = (day, hour, min) => {
  const formedDay = +day !== 0 ? day + `D` : ``;
  const formedHour = +hour === 0 && +hour !== 0 || +hour !== 0 && +hour !== 0 || +hour !== 0 ? hour + `H` : ``;
  const formedMin = min + `M`;

  return formedDay + ` ` + formedHour + ` ` + formedMin;
};

const getFormedDate = (year, month, day) => year + `-` + month + `-` + day;
const getFormedTime = (hour, min) => hour + `:` + min;

export {getFormedDuration, getFormedDate, getFormedTime};
