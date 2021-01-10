import {replaceItemInArray} from '../utils/common';
import {render, RenderPosition} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import EventItemPresenter from './event-item-presenter';
import EventsListView from "../views/layout-views/events-list-view";

import {Modes as EventItemModes, EmittingActions as EventItemActions} from './event-item-presenter';

export default class EventsListPresenter extends AbstractPresenter {
  constructor({container}) {
    super({container});
    this._events = null;

    this._eventItemPresenters = null;

    this._editingItem = null;

    this.updateOnEventItemChange = this.updateOnEventItemChange.bind(this);
  }

  init({events}) {
    this._events = [...events];
    this._view = new EventsListView({events});
    this._eventItemPresenters = new Map();

    for (let event of events) {
      const eventItemPresenter = new EventItemPresenter({container: this._view});
      eventItemPresenter.init({event});
      eventItemPresenter.subscribe(this);
      this._eventItemPresenters.set(event, eventItemPresenter);
    }

    render(this._container, RenderPosition.BEFOREEND, this._view);
  }

  updateOnEventItemChange({event: newEvent, mode}, action) {
    switch (action) {
      case EventItemActions.MODE_UPDATE:

        if (mode === EventItemModes.EDITING) {
          if (this._editingItem) {
            this._eventItemPresenters.get(this._editingItem).setDefaultMode();
          }
          this._editingItem = newEvent;
        } else {
          this._editingItem = null;
        }

        break;

      case EventItemActions.EVENT_UPDATE:

        const oldEvent = this._events.find((event) => event.id === newEvent.id);
        replaceItemInArray(this._events, oldEvent, newEvent);

        const eventItemPresenter = this._eventItemPresenters.get(oldEvent);
        eventItemPresenter.update({event: newEvent});

        this._eventItemPresenters.delete(oldEvent);
        this._eventItemPresenters.set(newEvent, eventItemPresenter);

        break;
    }
  }
}
