import AbstractView from '../abstract-view';

const getTimeDifference = (minutes) => {
  return `${Math.floor(minutes / 60)}H ${minutes % 60}M`;
};

export default class EventScheduleView extends AbstractView {
  constructor(eventDates) {
    super();
    this._eventDates = eventDates;
  }

  getTemplate() {
    const {startDate, endDate} = this._eventDates;
    return `<div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${startDate.toDate()}">${startDate.format(`HH:mm`)}</time>
                &mdash;
                <time class="event__end-time" datetime="${endDate.toDate()}">${endDate.format(`HH:mm`)}</time>
              </p>
              <p class="event__duration">${getTimeDifference(endDate.diff(startDate, `m`))}</p>
           </div>`;
  }
}
