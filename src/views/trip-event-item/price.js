import AbstractComponent from '../abstract-component';

export default class EventPrice extends AbstractComponent {
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
