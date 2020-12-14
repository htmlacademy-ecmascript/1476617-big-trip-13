export const getTripEventTimeGroupMarkup = ({startDate, endDate}) => `
                    <div class="event__field-group  event__field-group--time">
                      <label class="visually-hidden" for="event-start-time-1">From</label>
                      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate.format(`DD/MM/YY HH:mm`)}">
                      &mdash;
                      <label class="visually-hidden" for="event-end-time-1">To</label>
                      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate.format(`DD/MM/YY HH:mm`)}"></input>
                    </div>`;
