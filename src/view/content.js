import {getEditFormMarkup} from './edit-form';
import {getAddFormMarkup} from './add-form';
import {getTripEventItem} from './trip-event-item';


export const getContentMarkup = () => {
  return `<ul class="trip-events__list">
            ${getEditFormMarkup()}
            ${getTripEventItem()}
            ${getTripEventItem()}
            ${getTripEventItem()}
            ${getAddFormMarkup()}
    </ul>`;
};
