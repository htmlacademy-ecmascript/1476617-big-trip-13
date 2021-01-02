import {clearInnerHTML} from "../utils/render";
import {generateTripEvents} from "../mocks/generate-trip-event-item";

import TripInfoPresenter from './trip-info-presenter';
import MenuPresenter from './menu-presenter';
import FiltersPresenter from './filter-presenter';
import SortPresenter from './sort-presenter';
import EventsListPresenter from './events-list-presenter';

const Layout = {
  TRIP_INFO: `TRIP_INFO`,
  MENU: `MENU`,
  FILTERS: `FILTERS`,
  SORT: `SORT`,
  EVENTS_LIST: `EVENTS_LIST`,
};

const getTripRoute = (tripEvents) => {
  const tripEventsDestinations = tripEvents.map(
      (tripEvent) => tripEvent.destination
  );
  return [...new Set(tripEventsDestinations)];
};

const getTripPrice = (tripEvents) => {
  return tripEvents.reduce((sum, tripEvent) => sum + tripEvent.price, 0);
};

const getStartDate = (tripEvents) => {
  return tripEvents[0].startDate;
};

const getEndDate = (tripEvents) => {
  return tripEvents[tripEvents.length - 1].startDate;
};

const tripEvents = generateTripEvents();
const trip = {
  route: getTripRoute(tripEvents),
  price: getTripPrice(tripEvents),
  startDate: getStartDate(tripEvents),
  endDate: getEndDate(tripEvents),
};

class DOMContainers {
  constructor() {
    this.TRIP_MAIN = document.querySelector(`.trip-main`);
    this.TRIP_EVENTS = document.querySelector(`.trip-events`);
    this.MENU = this.TRIP_MAIN.querySelector(
        `.trip-main__trip-controls`
    );
  }
}

export default class LayoutPresenter {
  constructor() {
    this._layoutItemPresenters = null;
    this._containers = null;
  }

  init() {
    this._layoutItemPresenters = new Map();
    this._containers = new DOMContainers();

    clearInnerHTML(this._containers.TRIP_EVENTS, this._containers.MENU);

    const tripInfoPresenter = new TripInfoPresenter({container: this._containers.TRIP_MAIN});
    tripInfoPresenter.init({trip});
    this._layoutItemPresenters.set(Layout.TRIP_INFO, tripInfoPresenter);

    const menuPresenter = new MenuPresenter({container: this._containers.MENU});
    menuPresenter.init();
    this._layoutItemPresenters.set(Layout.MENU, menuPresenter);

    const filtersPresenter = new FiltersPresenter({container: this._containers.MENU});
    filtersPresenter.init();
    this._layoutItemPresenters.set(Layout.FILTERS, filtersPresenter);

    const sortPresenter = new SortPresenter({container: this._containers.TRIP_EVENTS});
    sortPresenter.init();
    this._layoutItemPresenters.set(Layout.SORT, sortPresenter);

    const eventsListPresenter = new EventsListPresenter({container: this._containers.TRIP_EVENTS});
    eventsListPresenter.init({events: tripEvents});
    this._layoutItemPresenters.set(Layout.EVENTS_LIST, eventsListPresenter);
  }
}
