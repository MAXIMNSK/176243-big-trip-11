const getFormedDate = (day, month, year) => day + `/` + month + `/` + year;
const getFormedTime = (hour, min) => hour + `:` + min;

export {getFormedDate, getFormedTime};
