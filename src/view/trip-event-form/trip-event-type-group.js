import {TRIP_EVENT_TYPES} from '../../const';

export const getTripEventTypeGroupMarkup = ({type}) => {
  const lowerCaseSelectedTripEventType = type.toLowerCase();

  return `<div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="${type} icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${TRIP_EVENT_TYPES.map((tripEventType) => {
    const lowerCaseTripEventType = tripEventType.toLowerCase();
    const checked = lowerCaseTripEventType === lowerCaseSelectedTripEventType;
    return `    <div class="event__type-item">
                  <input id="event-type-${lowerCaseTripEventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${lowerCaseTripEventType}" ${checked ? `checked` : ``}>
                  <label class="event__type-label  event__type-label--${lowerCaseTripEventType}" for="event-type-${lowerCaseTripEventType}-1">${tripEventType}</label>
                </div>`;
  }).join(``)}

              </fieldset>
            </div>
          </div>`;
};
