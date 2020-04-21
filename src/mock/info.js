import {getRandomNumber} from "../utility/random_number";
const destinationInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const FROM = 1;
const TO = 4;

const count = Math.floor(Math.random() * TO + FROM);
const textArray = destinationInfo.split(`. `);

export const getInfo = () => new Array(count).fill(``).map(() => textArray[getRandomNumber(textArray.length)]).join(`. `);
