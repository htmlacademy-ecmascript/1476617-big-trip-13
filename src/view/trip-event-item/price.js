import {createElement} from '../../utils';

export default class EventPrice {
  constructor({price}) {
    this._element = null;
    this._price = price;
  }

  getTemplate({price}) {
    return `<p class="event__price">
             &euro;&nbsp;<span class="event__price-value">${price}</span>
           </p>`;
  }

  getElement() {
    if (!this._element) {
      const price = this._price;
      this._element = createElement(this.getTemplate({price}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
