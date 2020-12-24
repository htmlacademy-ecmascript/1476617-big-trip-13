import {createElement, render, RenderPosition} from '../../utils';
import TripEventForm from '../trip-event-form/form';
import TripEventItem from '../trip-event-item/event-item';

export default class EventsList {
  constructor(tripEvents) {
    this._tripEvents = tripEvents;
    this._element = null;
  }

  getTemplate() {
    return `<ul class="trip-events__list">
           </ul>`;
  }

  getSetItemEditedHandler(index) {
    return () => {
      const oldElement = this._element.children[index];
      const newElement = new TripEventForm({tripEvent: this._tripEvents[index], unsetItemEditedHandler: this.getUnsetItemEditedHandler(index)}).getElement();
      this._element.replaceChild(newElement, oldElement);
    };
  }

  getUnsetItemEditedHandler(index) {
    return () => {
      const oldElement = this._element.children[index];
      const newElement = new TripEventItem({tripEvent: this._tripEvents[index], setItemEditedHandler: this.getSetItemEditedHandler(index)}).getElement();
      this._element.replaceChild(newElement, oldElement);
    };
  }

  getElement() {
    if (!this._element) {
      const tripEvents = this._tripEvents;
      const content = createElement(this.getTemplate());

      const tripEventItems = tripEvents.map((tripEvent, index) => {
        return new TripEventItem({tripEvent, setItemEditedHandler: this.getSetItemEditedHandler(index)}).getElement();
      });
      render(content, RenderPosition.AFTERBEGIN, ...tripEventItems);
      this._element = content;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
