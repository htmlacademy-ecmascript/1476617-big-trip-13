import {getOffersListMarkup} from './offers-list';
import {getEventScheduleMarkup} from './event-schedule';
import {getEventPriceMarkup} from './event-price';

export const getTripEventItemMarkup = ({

  type,
  destination,
  price,
  startDate,
  endDate,
  offers,
  isFavourite

}) => {

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

                ${getEventScheduleMarkup({startDate, endDate})}

                ${getEventPriceMarkup({price})}

                <h4 class="visually-hidden">Offers:</h4>
                ${getOffersListMarkup(offers)}

                <button class="event__favorite-btn ${isFavouriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>

                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>

              </div>
            </li>`;
};
