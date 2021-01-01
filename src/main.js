import {render, RenderPosition, replace} from "./utils/render";

import {generateTripEventItem} from "./mocks/generate-trip-event-item";

import {getRandomInteger} from "./utils/common";

import EventsListPresenter from './presenters/events-list';

import TripInfoView from "./views/layout-components/trip-info";
import MenuView from "./views/layout-components/menu";
import FiltersView from "./views/layout-components/filters";
import SortView from "./views/layout-components/sort";

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

const renderEventsList = (events) => {
  // // step 3. assigning event handling functions to EventsList component
  // eventsList.setOnEscKeydownHandler(onEscKeyDownHandler);
  // eventsList.setReplaceItemWithForm(replaceItemWithForm);
  // eventsList.setReplaceFormWithItem(replaceFormWithItem);
  // eventsList.setToggleEventComponents(toggleEventComponent);
  // render(tripEventsContainer, RenderPosition.BEFOREEND, eventsList);
};

render(aboutTripContainer, RenderPosition.AFTERBEGIN, new TripInfoView(tripInfo));
clearInnerHTML(menuContainer);
render(menuContainer, RenderPosition.AFTERBEGIN, new MenuView());
render(menuContainer, RenderPosition.BEFOREEND, new FiltersView());
clearInnerHTML(tripEventsContainer);
render(tripEventsContainer, RenderPosition.AFTERBEGIN, new SortView());
// renderEventsList(tripEvents);
const eventsList = new EventsListPresenter({container: tripEventsContainer});
eventsList.init({events: tripEvents});
