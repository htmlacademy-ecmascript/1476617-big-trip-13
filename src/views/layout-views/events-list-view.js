import AbstractView from '../abstract-view';

export default class EventsListView extends AbstractView {
  constructor({events}) {
    super();
    this._events = events;
  }

  getTemplate() {
    return (this._events.length === 0)
      ? `<p class="trip-events__msg">Click New Event to create your first point</p>`
      : `<ul class="trip-events__list">
        </ul>`;
  }

  setOnEscKeydownHandler(cb) {
    this._callbacks.setOnEscKeydownHandler = cb;
    document.addEventListener(`keydown`, cb);
  }

  setToggleEventComponents(cb) {
    this._callbacks.toggleEventComponent = cb;
  }

  setReplaceItemWithForm(cb) {
    this._callbacks.replaceItemWithForm = cb;
    this._eventComponents.forEach(
        (tripEventElement, index) => tripEventElement.setOnRollupButtonClick(() => cb(index))
    );
  }

  setReplaceFormWithItem(cb) {
    this._callbacks.unsetItemEdited = cb;
  }
}
