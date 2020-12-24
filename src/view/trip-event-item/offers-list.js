import {createElement} from '../../utils';

export default class OffersListMarkup {
  constructor({offers}) {
    this._offers = offers;
    this._element = null;
  }

  getTemplate({offers}) {
    return `<ul class="event__selected-offers">
             ${offers.map(({isSelected, title, price}) => isSelected ? `
               <li class="event__offer">
                 <span class="event__offer-title">${title}</span>
                 &plus;&euro;&nbsp;
                 <span class="event__offer-price">${price}</span>
               </li>` : ``).join(``)}
           </ul>`;
  }

  getElement() {
    if (!this._element) {
      const offers = this._offers;
      this._element = createElement(this.getTemplate({offers}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
