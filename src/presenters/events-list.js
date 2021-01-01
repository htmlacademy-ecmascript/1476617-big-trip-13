import {render, RenderPosition, replace} from '../utils/render';

import EventsListView from "../views/layout-components/events-list";
import EventItemPresenter from './event-item';

import {Modes as EventItemModes} from './event-item';

export default class EventsListPresenter {
  constructor({container}) {
    this._container = container;
    this._events = null;
    this._view = null;

    this._eventPresenters = new Map();

    this._editingItem = null;

    this._unsetEditingItem = this._unsetEditingItem.bind(this);
    this.reactToChangingEventItemMode = this.reactToChangingEventItemMode.bind(this);
  }

  init({events}) {
    this._events = [...events];
    this._view = new EventsListView({events});

    for (let event of events) {
      const eventItemPresenter = new EventItemPresenter({container: this._view, parentPresenter: this});
      eventItemPresenter.init({event});
      this._eventPresenters.set(event, eventItemPresenter);
    }

    render(this._container, RenderPosition.AFTERBEGIN, this._view);
  }

  reactToChangingEventItemMode({event, mode}) {
    if (mode === EventItemModes.EDITING) {
      if (this._editingItem) {
        this._eventPresenters.get(this._editingItem).setDefaultMode();
      }
      this._editingItem = event;
    } else {
      this._editingItem = null;
    }
  }

  // _setEditingItem(event) {
  //   const eventItemPresenter = this._eventPresenters.get(event);
  //   eventItemPresenter.setEditingMode();

  // eventFormComponent.setOnSubmitHandler(() => replaceFormWithItem(index));
  // eventFormComponent.setOnResetHandler(() => replaceFormWithItem(index));
  // eventFormComponent.setOnEventRollupButtonClickHandler(() => replaceFormWithItem(index));

  // replacing components in both view and components inner data presentation
  // replace(eventFormComponent, eventItemElement);
  // this._eventComponents[index] = eventFormComponent;

  //   this._editingItem = event;
  // }

  _unsetEditingItem(index) {
    // MAKE IT WITH EVENT ITSELF!!!!!!!!

    // getting current item data
    const event = this._eventsData[index];

    // creating new and getting old elements
    const eventItemComponent = new EventItemView({event});
    const eventFormElement = this._element.children[index];

    // setting new elements handlers
    eventItemComponent.setOnRollupButtonClick(() => replaceItemWithForm(index));

    // replacing components in both view and components inner data presentation
    replace(eventItemComponent, eventFormElement);
    this._eventComponents[index] = eventItemComponent;

    // unsetting edited item index
    this._editedItemIndex = null;

  }
}
