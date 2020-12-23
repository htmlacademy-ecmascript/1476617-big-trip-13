import {createElement, render, RenderPosition} from '../../utils';

import OffersList from './offers-list';
import EventSchedule from './event-schedule';
import EventPrice from './price';
import AddToFavouritesButton from './add-to-favourites-button';
import EditEventButton from './edit-event-button';

export default class TripEventItem {
  constructor({tripEvent, setItemEditedHandler}) {
    this._tripEvent = tripEvent;
    this._element = null;
    this._setItemEditedHandler = setItemEditedHandler;
  }

  getTemplate({type, destination, startDateFormatted, lowerCaseType}) {

    return `<li class="trip-events__item">
              <div class="event">

                <time class="event__date" datetime="2019-03-18">${startDateFormatted}</time>

                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${lowerCaseType}.png" alt="${type}icon">
                </div>

                <h3 class="event__title">${type} ${destination}</h3>

              </div>
            </li>`;
  }

  getElement() {
    if (!this._element) {
      const {type, destination, price, startDate, endDate, offers, isFavourite} = this._tripEvent;
      const setItemEditedHandler = this._setItemEditedHandler;

      const isFavouriteClassName = isFavourite ? `event__favorite-btn--active` : ``;
      const startDateFormatted = startDate.format(`MMM D`);
      const lowerCaseType = type.toLowerCase();

      const tripEvent = createElement(this.getTemplate({type, destination, startDateFormatted, lowerCaseType, isFavouriteClassName}));

      const eventSchedule = new EventSchedule({startDate, endDate}).getElement();
      const eventPrice = new EventPrice({price}).getElement();
      const offersHeading = createElement(`<h4 class="visually-hidden">Offers:</h4>`);
      const offersList = new OffersList({offers}).getElement();
      const addToFavouritesButton = new AddToFavouritesButton({isFavouriteClassName}).getElement();
      const editEventButton = new EditEventButton({setItemEditedHandler}).getElement();

      render(tripEvent.querySelector(`.event`), RenderPosition.BEFOREEND, eventSchedule, eventPrice, offersHeading, offersList, addToFavouritesButton, editEventButton);

      this._element = tripEvent;
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
