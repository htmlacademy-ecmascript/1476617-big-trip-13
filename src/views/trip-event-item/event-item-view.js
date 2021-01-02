import AbstractView from '../abstract-view';

import OffersListView from './offers-list-view';
import EventScheduleView from './event-schedule-view';
import EventPriceView from './price-view';
import AddToFavouritesButtonView from './add-to-favourites-button-view';

export default class TripEventItemView extends AbstractView {
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

                ${new EventScheduleView({startDate, endDate}).getTemplate()}
                ${new EventPriceView({price}).getTemplate()}

                <h4 class="visually-hidden">Offers:</h4>

                ${new OffersListView({offers}).getTemplate()}
                ${new AddToFavouritesButtonView({isFavouriteClassName}).getTemplate()}

                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>

              </div>
            </li>`;
  }

  setOnRollupButtonClickHandler(cb) {
    this._callbacks.onRollupButtonClickHandler = cb;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }

  setOnFavouriteButtonClickHandler(cb) {
    const onFavouriteButtonClickHandler = () => {
      cb();
      this.getElement().querySelector(`.event__favorite-btn`).classList.toggle(`event__favorite-btn--active`);
    };
    this._callbacks.onFavouriteButtonClickHandler = onFavouriteButtonClickHandler;
    this.getElement().querySelector(`.event__favorite-btn `).addEventListener(`click`, onFavouriteButtonClickHandler);
  }
}
