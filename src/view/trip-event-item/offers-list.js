import AbstractComponent from '../abstract-component';

export default class OffersListMarkup extends AbstractComponent {
  constructor({offers}) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    const offers = this._offers;
    return `<ul class="event__selected-offers">
             ${offers.map(({isSelected, title, price}) => isSelected ? `
               <li class="event__offer">
                 <span class="event__offer-title">${title}</span>
                 &plus;&euro;&nbsp;
                 <span class="event__offer-price">${price}</span>
               </li>` : ``).join(``)}
           </ul>`;
  }
}
