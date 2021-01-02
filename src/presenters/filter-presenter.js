import {render, RenderPosition} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import FiltersView from "../views/layout-views/filters-view";

export default class FiltersPresenter extends AbstractPresenter {
  init() {
    this._view = new FiltersView();
    render(this._container, RenderPosition.BEFOREEND, this._view);
  }
}
