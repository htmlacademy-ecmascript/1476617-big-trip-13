import {render, RenderPosition} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import SortView from "../views/layout-views/sort-view";

export default class SortPresenter extends AbstractPresenter {
  init() {
    this._view = new SortView();
    render(this._container, RenderPosition.AFTERBEGIN, this._view);
  }
}
