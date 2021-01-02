import {render, RenderPosition, remove, replace} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import EventItemView from "../views/trip-event-item/event-item-view";
import EventFormView from "../views/trip-event-form/form-view";

export const Modes = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export const EmittingActions = {
  MODE_UPDATE: `MODE_UPDATE`,
  EVENT_UPDATE: `EVENT_UPDATE`,
};

export const RecievingActions = {
  UPDATE_IS_FAVOURITE: `UPDATE_IS_FAVOURITE`,
}

export default class EventsItemPresenter extends AbstractPresenter {
  constructor({container}) {
    super({container});
    this._subscribers = null;
    this._event = null;
    this._mode = null;

    this._notifySubscribers = this._notifySubscribers.bind(this);
    this._setItemView = this._setItemView.bind(this);
    this._setFormView = this._setFormView.bind(this);
    this._setEditingMode = this._setEditingMode.bind(this);
    this._setDefaultMode = this._setDefaultMode.bind(this);
    this._setIsFavourite = this._setIsFavourite.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  init({event}) {
    this._event = event;
    this._mode = Modes.DEFAULT;
    this._subscribers = [];
    this._setItemView({event});

    render(this._container, RenderPosition.BEFOREEND, this._view);
  }

  update({ event }) {
    this._event = event;
  }

  subscribe(subscriber) {
    this._subscribers.push(subscriber);
  }

  _notifySubscribers(action) {
    for (let subscriber of this._subscribers) {
      subscriber.updateOnEventItemChange({event: this._event, mode: this._mode}, action);
    }
  }

  _setItemView({event}) {
    const oldView = this._view;
    const newView = new EventItemView({event});

    if (oldView) {
      replace(newView, oldView);
      remove(oldView);
    }

    this._view = newView;
    this._view.setOnRollupButtonClickHandler(this._setEditingMode);
    this._view.setOnFavouriteButtonClickHandler(this._setIsFavourite);
  }

  _setFormView({event}) {
    const oldView = this._view;
    const newView = new EventFormView({event});

    if (oldView) {
      replace(newView, oldView);
      remove(oldView);
    }

    this._view = newView;
    this._view.setOnEventRollupButtonClickHandler(this._setDefaultMode);
    this._view.setOnResetHandler(this._setDefaultMode);
    this._view.setOnSubmitHandler(this._setDefaultMode);
  }

  _setEditingMode() {
    this._mode = Modes.EDITING;
    this._setFormView({event: this._event});
    this._notifySubscribers(EmittingActions.MODE_UPDATE);
  }

  _setDefaultMode() {
    this._mode = Modes.DEFAULT;
    this._setItemView({event: this._event});
    this._notifySubscribers(EmittingActions.MODE_UPDATE);
  }

  _setIsFavourite() {
    this._event = {...this._event, isFavourite: !this._event.isFavourite};
    this._notifySubscribers(EmittingActions.EVENT_UPDATE);
  }
}
