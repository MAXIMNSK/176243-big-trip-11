import {transform} from "../utility/transformation";

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Нельзя создать инстанс/объект на основе абстрактного класса, можно только наследоваться.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Метод является абстрактным. Предназначен для переопределения в классе наследующем все свойства абстрактного класса.`);
  }

  getElement() {
    if (!this._element) {
      this._element = transform(this.getTemplate());
    }

    return this._element;
  }

  resetVariable() {
    this._element = null;
  }
}
