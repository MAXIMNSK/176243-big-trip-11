import {MIN_IN_HOUR, HOURS_IN_DAY, DAYS_COUNT, MIN_COUNT_MINUTE} from "../consts/constants";

const getTime = (time, minValue = 0) => {
  const value = Math.floor(Math.random() * time + minValue);
  return value < 10 ? `0` + value : value;
};

const getDurationTime = () => {
  return {
    min: getTime(MIN_IN_HOUR, MIN_COUNT_MINUTE),
    hour: getTime(HOURS_IN_DAY),
    day: getTime(DAYS_COUNT),
  };
};

export {getDurationTime};
