import {getEditFormMarkup} from './edit-form';
import {getAddFormMarkup} from './add-form';
import {getTripEventItemMarkup} from './trip-event-item';

export const getContentMarkup = (tripEvents) => {
  return `<ul class="trip-events__list">
            ${getEditFormMarkup()}
            ${tripEvents.map((tripEvent) => getTripEventItemMarkup(tripEvent)).join(``)}
            ${getAddFormMarkup()}
    </ul>`;
};
