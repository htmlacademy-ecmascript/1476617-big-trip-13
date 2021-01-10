import {render, RenderPosition, replace} from "./utils/render";

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
  // step 1. initializing events list component with events data
  const eventsList = new EventsList({eventsData});

  // step 2. declaring event handling functions
  const onEscKeyDownHandler = (function (evt) {
    const editedItemIndex = this._editedItemIndex;
    if (editedItemIndex !== null && evt.key === `Esc` || evt.key === `Escape`) {
      replaceFormWithItem(editedItemIndex);
    }
  }).bind(eventsList);

  const replaceItemWithForm = (function (index) {
    if (!this._element) {
      this.getElement();
    }

    // getting current item data
    const eventData = this._eventsData[index];

    // creating new and getting old elements
    const eventFormComponent = new TripEventForm({eventData});
    const eventItemElement = this._element.children[index];

    // setting new elements handlers
    eventFormComponent.setOnSubmitHandler(() => replaceFormWithItem(index));
    eventFormComponent.setOnResetHandler(() => replaceFormWithItem(index));
    eventFormComponent.setOnEventRollupButtonClickHandler(() => replaceFormWithItem(index));

    // replacing components in both view and components inner data presentation
    replace(eventFormComponent, eventItemElement);
    this._eventComponents[index] = eventFormComponent;

    // setting edited item index
    this._editedItemIndex = index;

  }).bind(eventsList);

  const replaceFormWithItem = (function (index) {
    // getting current item data
    const eventData = this._eventsData[index];

    // creating new and getting old elements
    const eventItemComponent = new TripEventItem({eventData});
    const eventFormElement = this._element.children[index];

    // setting new elements handlers
    eventItemComponent.setOnRollupButtonClick(() => replaceItemWithForm(index));

    // replacing components in both view and components inner data presentation
    replace(eventItemComponent, eventFormElement);
    this._eventComponents[index] = eventItemComponent;

    // unsetting edited item index
    this._editedItemIndex = null;

  }).bind(eventsList);


  // TODO: check if this one is ever gonna be needed
  const toggleEventComponent = (function (index) {
    if (this._editedItemIndex) {
      this._callback(this.setReplaceFormWithItem(this._editedItemIndex));
    }

    if (this._eventComponents[index] instanceof TripEventItem) {
      this._callback.replaceItemWithForm(index);
    } else {
      this._callback.replaceFormWithItem(index);
    }
  }).bind(eventsList);

  // step 3. assigning event handling functions to EventsList component
  eventsList.setOnEscKeydownHandler(onEscKeyDownHandler);
  eventsList.setReplaceItemWithForm(replaceItemWithForm);
  eventsList.setReplaceFormWithItem(replaceFormWithItem);
  eventsList.setToggleEventComponents(toggleEventComponent);
  render(tripEventsContainer, RenderPosition.BEFOREEND, eventsList);
};

render(aboutTripContainer, RenderPosition.AFTERBEGIN, new TripInfo(tripInfo));
clearInnerHTML(menuContainer);
render(menuContainer, RenderPosition.AFTERBEGIN, new Menu());
render(menuContainer, RenderPosition.BEFOREEND, new Filters());
clearInnerHTML(tripEventsContainer);
render(tripEventsContainer, RenderPosition.AFTERBEGIN, new Sort());
renderEventsList(tripEvents);
