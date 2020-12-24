import {createElement, render, RenderPosition} from '../../utils';
import TripEventTypeGroup from './event-type-group';
import TripEventDestinationGroup from './event-destination-group';
import TripEventTimeGroup from './event-time-group';
import TripEventPriceFieldGroup from './event-price-field-group';
import TripEventDetails from './trip-event-details/trip-event-details';

export default class TripEventForm {
  constructor({tripEvent, unsetItemEditedHandler}) {
    this._tripEvent = tripEvent;
    this._element = null;
    this._unsetItemEditedHandler = unsetItemEditedHandler;
  }

  getTemplate() {
    return `<li class="trip-events__item">
             <form class="event event--edit" action="#" method="post">
               <header class="event__header">

                 <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                 <button class="event__reset-btn" type="reset">Cancel</button>

               </header>
             </form>
           </li>`;
  }

  getElement() {
    if (!this._element) {
      const {type, destination, price, description, photos, startDate, endDate, offers} = this._tripEvent;
      const tripEventForm = createElement(this.getTemplate());

      const tripEventTypeGroup = new TripEventTypeGroup({type}).getElement();
      const tripEventsDestinationGroup = new TripEventDestinationGroup({type, destination}).getElement();
      const tripEventTimeGroup = new TripEventTimeGroup({startDate, endDate}).getElement();
      const tripEventPriceFieldGroup = new TripEventPriceFieldGroup({price}).getElement();
      const tripEventDetails = new TripEventDetails({description, photos, offers}).getElement();

      render(tripEventForm.querySelector(`.event__header`), RenderPosition.AFTERBEGIN, tripEventTypeGroup, tripEventsDestinationGroup, tripEventTimeGroup, tripEventPriceFieldGroup);
      render(tripEventForm.querySelector(`.event--edit`), RenderPosition.BEFOREEND, tripEventDetails);

      tripEventForm.addEventListener(`submit`, this._unsetItemEditedHandler);
      tripEventForm.addEventListener(`reset`, this._unsetItemEditedHandler);
      this._element = tripEventForm;
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
