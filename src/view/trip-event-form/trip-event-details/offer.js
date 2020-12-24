import {createElement} from '../../../utils';

export default class Offer {
  constructor(offer) {
    this._offer = offer;
    this._element = null;
  }

  getTemplate({name, title, price, isSelected}) {

    return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isSelected ? `checked` : ``}>
    <label class="event__offer-label" for="event-offer-${name}-1">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
    </label>
    </div>`;
  }

  getElement() {
    if (!this._element) {
      const {name, title, price, isSelected} = this._offer;
      this._element = createElement(this.getTemplate({name, title, price, isSelected}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
