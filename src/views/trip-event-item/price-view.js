import AbstractView from '../abstract-view';

export default class EventPriceView extends AbstractView {
  constructor({price}) {
    super();
    this._price = price;
  }

  getTemplate() {
    const price = this._price;
    return `<p class="event__price">
             &euro;&nbsp;<span class="event__price-value">${price}</span>
           </p>`;
  }
}
