import {createElement} from '../../utils/render';
import AbstractComponent from '../abstract-component';
import TripEventItem from '../trip-event-item/event-item';

export default class EventsList extends AbstractComponent {
  constructor(tripEvents) {
    super();
    this._tripEvents = tripEvents;
    this._editedItemIndex = null;
  }

  getTemplate({tripEvents}) {
    return (tripEvents.length === 0)
      ? `<p class="trip-events__msg">Click New Event to create your first point</p>`
      : `<ul class="trip-events__list">
          ${tripEvents.map((tripEvent) => tripEvent.getTemplate()).join(``)}
        </ul>`;
  }

  getElement() {
    if (!this._element) {
      const tripEvents = this._tripEvents.map((tripEvent) => new TripEventItem({tripEvent}));
      this._tripEventElements = tripEvents;
      this._element = createElement(this.getTemplate({tripEvents}));
    }
    return this._element;
  }

  getEditedItemIndex() {
    return this._editedItemIndex;
  }

  setOnEscKeydownHandler(cb) {
    this._callback.setOnEscKeydownHandler = cb;
    document.addEventListener(`keydown`, cb);
  }

  setSetItemEdited(cb) {
    if (!this._element) {
      this.getElement();
    }
    this._tripEventElements.forEach(
        (tripEventElement, index) => tripEventElement.setSetItemEditedListener(() => cb(index))
    );
  }

  setUnsetItemEdited(cb) {
    this._callback.unsetItemEdited = cb;
  }
}
