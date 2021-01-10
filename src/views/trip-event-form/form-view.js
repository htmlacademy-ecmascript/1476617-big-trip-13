import AbstractView from '../abstract-view';
import TripEventTypeGroupView from './event-type-group-view';
import TripEventDestinationGroupView from './event-destination-group-view';
import TripEventTimeGroupView from './event-time-group-view';
import TripEventPriceFieldGroupView from './event-price-field-group-view';
import TripEventDetailsView from './trip-event-details/trip-event-details-view';

export default class TripEventFormView extends AbstractView {
  constructor({event}) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type, destination, price, description, photos, startDate, endDate, offers} = this._event;
    return `<li class="trip-events__item">
             <form class="event event--edit" action="#" method="post">
               <header class="event__header">
                 ${new TripEventTypeGroupView({type}).getTemplate()}
                 ${new TripEventDestinationGroupView({type, destination}).getTemplate()}
                 ${new TripEventTimeGroupView({startDate, endDate}).getTemplate()}
                 ${new TripEventPriceFieldGroupView({price}).getTemplate()}

                 <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                 <button class="event__reset-btn" type="reset">Delete</button>

                 <button class="event__rollup-btn" type="button">
                   <span class="visually-hidden">Open event</span>
                 </button>

               </header>
               ${new TripEventDetailsView({description, photos, offers}).getTemplate()}
             </form>
           </li>`;
  }

  setOnSubmitHandler(cb) {
    this._callbacks.submitHandler = cb;
    this._element.addEventListener(`submit`, cb);
  }

  setOnResetHandler(cb) {
    this._callbacks.resetHandler = cb;
    this._element.addEventListener(`reset`, cb);
  }

  setOnEventRollupButtonClickHandler(cb) {
    this._callbacks.onEventRollupButtonClickHandler = cb;
    this._element.querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }
}
