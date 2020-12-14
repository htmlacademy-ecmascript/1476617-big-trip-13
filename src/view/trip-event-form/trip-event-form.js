import {getTripEventTypeGroupMarkup} from './trip-event-type-group';
import {getTripEventDestinationGroupMarkup} from './trip-event-destination-group';
import {getTripEventTimeGroupMarkup} from './trip-event-time-group';
import {getTripEventPriceFieldGroupMarkup} from './trip-event-price-field-group';
import {getTripEventDetailsMarkup} from './trip-event-details/trip-event-details';

export const getTripEventForm = ({

  type,
  destination,
  price,
  description,
  photos,
  startDate,
  endDate,
  offers,

}) => {

  return `<li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
              <header class="event__header">

                ${getTripEventTypeGroupMarkup({type})}

                ${getTripEventDestinationGroupMarkup({type, destination})}

                ${getTripEventTimeGroupMarkup({startDate, endDate})}

                ${getTripEventPriceFieldGroupMarkup({price})}

                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                <button class="event__reset-btn" type="reset">Cancel</button>

              </header>

              ${getTripEventDetailsMarkup({description, photos, offers})}

            </form>
          </li>`;
};
