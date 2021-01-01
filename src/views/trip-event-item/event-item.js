import AbstractComponent from '../abstract-component';

import OffersList from './offers-list';
import EventSchedule from './event-schedule';
import EventPrice from './price';
import AddToFavouritesButton from './add-to-favourites-button';

export default class TripEventItem extends AbstractComponent {
  constructor({event}) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type, destination, price, startDate, endDate, offers, isFavourite} = this._event;
    const isFavouriteClassName = isFavourite ? `event__favorite-btn--active` : ``;
    const startDateFormatted = startDate.format(`MMM D`);
    const lowerCaseType = type.toLowerCase();

    return `<li class="trip-events__item">
              <div class="event">

                <time class="event__date" datetime="2019-03-18">${startDateFormatted}</time>

                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${lowerCaseType}.png" alt="${type}icon">
                </div>

                <h3 class="event__title">${type} ${destination}</h3>

                ${new EventSchedule({startDate, endDate}).getTemplate()}
                ${new EventPrice({price}).getTemplate()}

                <h4 class="visually-hidden">Offers:</h4>

                ${new OffersList({offers}).getTemplate()}
                ${new AddToFavouritesButton({isFavouriteClassName}).getTemplate()}

                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>

              </div>
            </li>`;
  }

  setOnRollupButtonClickHandler(cb) {
    if (this._callbacks.setItemEdited) {
      return;
    }
    this._callbacks.setItemEdited = cb;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }
}
