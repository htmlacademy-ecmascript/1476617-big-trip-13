import {createElement, render, RenderPosition} from '../../utils/render';
import AbstractComponent from '../abstract-component';
import TripEventItem from '../trip-event-item/event-item';

export default class EventsList extends AbstractComponent {
  constructor({eventsData}) {
    super();
    this._eventsData = eventsData;
    this._eventComponents = this._eventsData.map((eventData) => new TripEventItem({eventData}));
    this._editedItemIndex = null;
  }

  getTemplate() {
    const eventComponents = this._eventComponents;
    return (eventComponents.length === 0)
      ? `<p class="trip-events__msg">Click New Event to create your first point</p>`
      : `<ul class="trip-events__list">
        </ul>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      render(this._element, RenderPosition.AFTERBEGIN, ...this._eventComponents);
    }
    return this._element;
  }

  setOnEscKeydownHandler(cb) {
    this._callback.setOnEscKeydownHandler = cb;
    document.addEventListener(`keydown`, cb);
  }

  setToggleEventComponents(cb) {
    this._callback.toggleEventComponent = cb;
  }

  setReplaceItemWithForm(cb) {
    this._callback.replaceItemWithForm = cb;
    this._eventComponents.forEach(
        (tripEventElement, index) => tripEventElement.setOnRollupButtonClick(() => cb(index))
    );
  }

  setReplaceFormWithItem(cb) {
    this._callback.unsetItemEdited = cb;
  }
}
