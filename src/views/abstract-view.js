import {createElement} from "../utils/render.js";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`AbstractView should be extended and cannot be instantiated`);
    }
    this._element = null;
    this._callbacks = {};
  }

  getTemplate() {
    throw new Error(`Abstract method getTemplate is not implemented`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
