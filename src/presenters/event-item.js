import {render, RenderPosition, remove, replace} from '../utils/render';

import EventItemView from "../views/trip-event-item/event-item";
import EventFormView from "../views/trip-event-form/form";

export const Modes = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class EventsItemPresenter {
  constructor({container, parentPresenter}) {
    this._container = container;
    this._parentPresenter = parentPresenter;
    this._event = null;
    this._view = null;

    this._mode = Modes.DEFAULT;

    this._setItemView = this._setItemView.bind(this);
    this._setFormView = this._setFormView.bind(this);
    this.setEditingMode = this.setEditingMode.bind(this);
    this.setDefaultMode = this.setDefaultMode.bind(this);
  }

  init({event}) {
    this._event = event;
    this._setItemView({event});

    render(this._container, RenderPosition.BEFOREEND, this._view);
  }

  _setItemView({event}) {
    const oldView = this._view;

    this._view = new EventItemView({event});
    this._view.setOnRollupButtonClickHandler(this.setEditingMode);

    if (oldView) {
      replace(this._view, oldView);
      remove(oldView);
    }
  }

  _setFormView({event}) {
    const oldView = this._view;

    this._view = new EventFormView({event});

    if (oldView) {
      replace(this._view, oldView);
      remove(oldView);
    }
  }

  setEditingMode() {
    this._mode = Modes.EDITING;
    this._setFormView({event: this._event});

    this._parentPresenter.reactToChangingEventItemMode({event: this._event, mode: this._mode});
  }

  setDefaultMode() {
    this._mode = Modes.DEFAULT;
    this._setItemView({event: this._event});

    this._parentPresenter.reactToChangingEventItemMode({event: this._event, mode: this._mode});
  }
}
