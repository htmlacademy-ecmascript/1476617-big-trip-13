import {createElement} from '../../utils';

export default class EditEventButton {
  constructor({setItemEditedHandler}) {
    this._element = null;
    this._setItemEditedHandler = setItemEditedHandler;
  }

  getTemplate() {
    return `<button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
           </button>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this._element.addEventListener(`click`, this._setItemEditedHandler);
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
