/**
 * Функция возвращает информацию о дне
 * @return {string} возвращает блок разметки
 */
export const getDate = () => {
  return (`
    <span class="day__counter">1</span>
    <time class="day__date" datetime="2019-03-18">MAR 18</time>
  `);
};