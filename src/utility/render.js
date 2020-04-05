import {INSERT} from "../consts/constants";

/**
 * Функция рендерит в разметку входные данные в виде строки
 * @param {*} container целевой блок в который будет рендерится шаблон
 * @param {*} template шаблон который функция рендерит
 * @param {*} place передаём позицию добавляемого элемента. Значение по умолчанию beforeend
 * @return {*} возвращает результат выполнения функции
 */
export const render = (container, template, place = INSERT.beforeend) => container.insertAdjacentHTML(place, template);
