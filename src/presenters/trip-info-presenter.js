import {render, RenderPosition} from '../utils/render';

import AbstractPresenter from './abstract-presenter';
import TripInfoView from "../views/layout-views/trip-info-view";

export default class TripInfoPresenter extends AbstractPresenter {
  init({trip}) {
    this._view = new TripInfoView({trip});
    render(this._container, RenderPosition.AFTERBEGIN, this._view);
  }
}
