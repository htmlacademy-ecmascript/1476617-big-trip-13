import AbstractComponent from '../abstract-component';
import TripEventTypeGroup from './event-type-group';
import TripEventDestinationGroup from './event-destination-group';
import TripEventTimeGroup from './event-time-group';
import TripEventPriceFieldGroup from './event-price-field-group';
import TripEventDetails from './trip-event-details/trip-event-details';

export default class TripEventForm extends AbstractComponent {
  constructor({tripEvent}) {
    super();
    this._tripEvent = tripEvent;
  }

  getTemplate() {
    const {type, destination, price, description, photos, startDate, endDate, offers} = this._tripEvent;
    return `<li class="trip-events__item">
             <form class="event event--edit" action="#" method="post">
               <header class="event__header">
                 ${new TripEventTypeGroup({type}).getTemplate()}
                 ${new TripEventDestinationGroup({type, destination}).getTemplate()}
                 ${new TripEventTimeGroup({startDate, endDate}).getTemplate()}
                 ${new TripEventPriceFieldGroup({price}).getTemplate()}

                 <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                 <button class="event__reset-btn" type="reset">Delete</button>

                 <button class="event__rollup-btn" type="button">
                   <span class="visually-hidden">Open event</span>
                 </button>

               </header>
               ${new TripEventDetails({description, photos, offers}).getTemplate()}
             </form>
           </li>`;
  }

  setUnsetItemEditedHandler(unsetItemEditedHandler) {
    this._callback.unsetItemEditedHandler = unsetItemEditedHandler;
    this._element.addEventListener(`submit`, unsetItemEditedHandler);
    this._element.addEventListener(`reset`, unsetItemEditedHandler);
    this._element.querySelector(`.event__rollup-btn`).addEventListener(`click`, unsetItemEditedHandler);
  }
}
