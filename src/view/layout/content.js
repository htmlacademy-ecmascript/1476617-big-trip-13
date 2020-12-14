import {getTripEventForm} from '../trip-event-form/trip-event-form';
import {getTripEventItemMarkup} from '../trip-event-item/trip-event-item';

export const getContentMarkup = (tripEvents) => {
  const [tripEventEdited, ...restTripEvents] = tripEvents;
  return `<ul class="trip-events__list">
            ${getTripEventForm(tripEventEdited)}
            ${restTripEvents.map((tripEvent) => getTripEventItemMarkup(tripEvent)).join(``)}
    </ul>`;
};
