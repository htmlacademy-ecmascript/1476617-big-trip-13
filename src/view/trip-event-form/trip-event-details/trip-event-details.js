import {getOfferItemMarkup} from './offer-item';

export const getTripEventDetailsMarkup = ({description, photos, offers}) => {
  return `      <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${offers.map((offer) => getOfferItemMarkup(offer)).join(``)}
                    </div>
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
};
