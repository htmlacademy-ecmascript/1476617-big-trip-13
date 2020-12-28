import {render, RenderPosition} from "./utils/render";

import {generateTripEventItem} from "./mock/generate-trip-event-item";

import {getRandomInteger} from "./utils/common";

import TripInfo from "./view/layout-components/trip-info";
import TripEventItem from "./view/trip-event-item/event-item";
import TripEventForm from "./view/trip-event-form/form";
import Menu from "./view/layout-components/menu";
import Filters from "./view/layout-components/filters";
import Sort from "./view/layout-components/sort";
import EventsList from "./view/layout-components/events-list";

const MIN_EVENTS_AMOUNT = 15;
const MAX_EVENTS_AMOUNT = 20;

const generateTripEvents = () => {
  const eventsAmount = getRandomInteger(MIN_EVENTS_AMOUNT, MAX_EVENTS_AMOUNT);
  const tripEvents = new Array(eventsAmount).fill().map(generateTripEventItem);
  tripEvents.sort((event1, event2) => event1.startDate - event2.startDate);
  return tripEvents;
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

const clearInnerHTML = (container) => {
  container.innerHTML = ``;
};

const aboutTripContainer = document.querySelector(`.trip-main`);
const menuContainer = aboutTripContainer.querySelector(
    `.trip-main__trip-controls`
);
const tripEventsContainer = document.querySelector(`.trip-events`);

const tripEvents = generateTripEvents();
const tripInfo = {
  route: getTripRoute(tripEvents),
  price: getTripPrice(tripEvents),
  startDate: getStartDate(tripEvents),
  endDate: getEndDate(tripEvents),
};

const renderEventsList = (eventsData) => {
  const eventsList = new EventsList(eventsData);

  const onEscKeyDownHandler = (function (evt) {
    const editedItemIndex = this.getEditedItemIndex();
    if (editedItemIndex !== null && evt.key === `Esc` || evt.key === `Escape`) {
      this.unsetItemEditedHandler(editedItemIndex);
    }
  }).bind(eventsList);

  const setItemEdited = (function (index) {
    if (this._editedItemIndex !== null) {
      this._callback.unsetItemEdited(this._editedItemIndex);
    }

    this._editedItemIndex = index;
    const oldElement = this._element.children[index];
    const newElement = new TripEventForm({tripEvent: this._tripEvents[index]}).getElement();
    const unsetItemEditedHandler = () => {
      this._callback.unsetItemEdited(index);
    };
    newElement.setUnsetItemEditedHandler(unsetItemEditedHandler);
    this._element.replaceChild(newElement, oldElement);
    console.log({newElement, oldElement});
  }).bind(eventsList);

  const unsetItemEdited = (function (index) {
    const oldElement = this._element.children[index];
    const newElement = new TripEventItem({tripEvent: this._tripEvents[index], setItemEdited: () => this._callback.setItemEdited(index)}).getElement();
    this._element.replaceChild(newElement, oldElement);
  }).bind(eventsList);

  eventsList.setOnEscKeydownHandler(onEscKeyDownHandler);
  eventsList.setSetItemEdited(setItemEdited);
  eventsList.setUnsetItemEdited(unsetItemEdited);
  render(tripEventsContainer, RenderPosition.BEFOREEND, eventsList);
};

render(aboutTripContainer, RenderPosition.AFTERBEGIN, new TripInfo(tripInfo));
clearInnerHTML(menuContainer);
render(menuContainer, RenderPosition.AFTERBEGIN, new Menu());
render(menuContainer, RenderPosition.BEFOREEND, new Filters());
clearInnerHTML(tripEventsContainer);
render(tripEventsContainer, RenderPosition.AFTERBEGIN, new Sort());
renderEventsList(tripEvents);
