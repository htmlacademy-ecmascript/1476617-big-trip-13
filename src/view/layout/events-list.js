import {createElement, render, RenderPosition} from '../../utils';
import TripEventForm from '../trip-event-form/form';
import TripEventItem from '../trip-event-item/event-item';

export default class EventsList {
  constructor(tripEvents) {
    this._tripEvents = tripEvents;
    this._element = null;
    this._editedItemIndex = null;
  }

  getTemplate() {
    return this._tripEvents.length > 0
      ? `<ul class="trip-events__list"></ul>`
      : `<p class="trip-events__msg">Click New Event to create your first point</p>`;
  }

  setItemEditedHandler(index) {
    if (this._editedItemIndex !== null) {
      this.unsetItemEditedHandler(this._editedItemIndex);
    }
    this._editedItemIndex = index;
    const oldElement = this._element.children[index];
    const newElement = new TripEventForm({tripEvent: this._tripEvents[index], unsetItemEditedHandler: () => this.unsetItemEditedHandler(index)}).getElement();
    this._element.replaceChild(newElement, oldElement);
  }

  unsetItemEditedHandler(index) {
    const oldElement = this._element.children[index];
    const newElement = new TripEventItem({tripEvent: this._tripEvents[index], setItemEditedHandler: () => this.setItemEditedHandler(index)}).getElement();
    this._element.replaceChild(newElement, oldElement);
  }

  getElement() {
    if (!this._element) {
      const tripEvents = this._tripEvents;
      const content = createElement(this.getTemplate());

      const tripEventItems = tripEvents.map((tripEvent, index) => {
        return new TripEventItem({tripEvent, setItemEditedHandler: () => this.setItemEditedHandler(index)}).getElement();
      });
      render(content, RenderPosition.AFTERBEGIN, ...tripEventItems);
      document.addEventListener(`keydown`, (evt) => {
        if (this._editedItemIndex !== null && evt.key === `Esc` || evt.key === `Escape`) {
          this.unsetItemEditedHandler(this._editedItemIndex);
        }
      });

      this._element = content;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
