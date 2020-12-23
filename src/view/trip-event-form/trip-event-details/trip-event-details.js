import {createElement, render, RenderPosition} from '../../../utils';

import Offer from './offer';

export default class TripEventDetails {
  constructor(tripEventDetails) {
    this._tripEventDetails = tripEventDetails;
    this._element = null;
  }

  getTemplate({description, photos}) {
    return `<section class="event__details">
             <section class="event__section  event__section--offers">
               <h3 class="event__section-title  event__section-title--offers">Offers</h3>
             </section>

             <section class="event__section  event__section--destination">
               <h3 class="event__section-title  event__section-title--destination">Destination</h3>
               <p class="event__destination-description">${description}</p>

               <div class="event__photos-container">
                 <div class="event__photos-tape">
                   ${photos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo">`).join(``)}
                 </div>
               </div>
             </section>
           </section>`;
  }

  getElement() {
    if (!this.element) {
      const {description, photos, offers} = this._tripEventDetails;

      const tripEventDetails = createElement(this.getTemplate({description, photos}));

      const offersContainer = document.createElement(`div`);
      offersContainer.className = `event__available-offers`;
      offersContainer.append(...offers.map((offer) => new Offer(offer).getElement()));

      render(tripEventDetails.querySelector(`.event__section--offers`), RenderPosition.BEFOREEND, offersContainer);

      this._element = tripEventDetails;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
