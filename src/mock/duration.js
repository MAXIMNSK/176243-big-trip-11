import {MIN_IN_HOUR, HOUR_IN_DAY, DAYS_COUNT, MIN_COUNT_MINUTE} from "../consts/constants";

const getDurationTime = () => {
  return {
    min: Math.floor(Math.random() * MIN_IN_HOUR + MIN_COUNT_MINUTE),
    hour: Math.floor(Math.random() * HOUR_IN_DAY),
    day: Math.floor(Math.random() * DAYS_COUNT),
  };
};

export {getDurationTime};
