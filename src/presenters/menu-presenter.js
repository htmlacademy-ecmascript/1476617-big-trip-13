import {render, RenderPosition} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import MenuView from "../views/layout-views/menu-view";

export default class MenuPresenter extends AbstractPresenter {
  init() {
    this._view = new MenuView();
    render(this._container, RenderPosition.AFTERBEGIN, this._view);
  }
}
