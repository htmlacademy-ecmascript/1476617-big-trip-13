import {createElement} from '../../utils';

const getTimeDifference = (minutes) => {
  return `${Math.floor(minutes / 60)}H ${minutes % 60}M`;
};

export default class EventSchedule {
  constructor(eventDates) {
    this._element = null;
    this._eventDates = eventDates;
  }

  getTemplate({startDate, endDate}) {
    return `<div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${startDate.toDate()}">${startDate.format(`HH:mm`)}</time>
                &mdash;
                <time class="event__end-time" datetime="${endDate.toDate()}">${endDate.format(`HH:mm`)}</time>
              </p>
              <p class="event__duration">${getTimeDifference(endDate.diff(startDate, `m`))}</p>
           </div>`;
  }

  getElement() {
    if (!this._element) {
      const {startDate, endDate} = this._eventDates;
      this._element = createElement(this.getTemplate({startDate, endDate}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
