import AbstractComponent from '../../abstract-component';

export default class Offer extends AbstractComponent {
  constructor(offer) {
    super();
    this._offer = offer;
  }

  getTemplate() {
    const {name, title, price, isSelected} = this._offer;
    return `<div class="event__offer-selector">
             <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isSelected ? `checked` : ``}>
             <label class="event__offer-label" for="event-offer-${name}-1">
               <span class="event__offer-title">${title}</span>
               &plus;&euro;&nbsp;
               <span class="event__offer-price">${price}</span>
             </label>
           </div>`;
  }
}
