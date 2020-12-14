import {generateTripEventItem} from './mock/generate-trip-event-item';

import {getRandomInteger} from './utils';

import {getTripInfoMarkup} from './view/layout/trip-info';
import {getMenuMarkup} from './view/layout/menu';
import {getFiltersMarkup} from './view/layout/filters';
import {getSortMarkup} from './view/layout/sort';
import {getContentMarkup} from './view/layout/content';

const MIN_EVENTS_AMOUNT = 15;
const MAX_EVENTS_AMOUNT = 20;

const generateTripEvents = () => {
  const eventsAmount = getRandomInteger(MIN_EVENTS_AMOUNT, MAX_EVENTS_AMOUNT);
  const tripEvents = new Array(eventsAmount).fill().map(generateTripEventItem);
  tripEvents.sort((event1, event2) => event1.startDate - event2.startDate);
  return tripEvents;
};

const getTripRoute = (tripEvents) => {
  const tripEventsDestinations = tripEvents.map((tripEvent) => tripEvent.destination);
  return[...new Set(tripEventsDestinations)];
};

const getTripPrice = (tripEvents) => {
  return tripEvents.reduce((sum, tripEvent) => sum + tripEvent.price, 0)
};

const getStartDate = (tripEvents) => {
  return tripEvents[0].startDate;
};

const getEndDate = (tripEvents) => {
  return tripEvents[tripEvents.length - 1].startDate;
};

const render = (container, HTMLMarkup, position) => {
  container.insertAdjacentHTML(position, HTMLMarkup);
};

const clearInnerHTML = (container) => {
  container.innerHTML = ``;
};


const aboutTripContainer = document.querySelector(`.trip-main`);
const menuContainer = aboutTripContainer.querySelector(`.trip-main__trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);

const tripEvents = generateTripEvents();
const tripInfo = {
  route: getTripRoute(tripEvents),
  price: getTripPrice(tripEvents),
  startDate: getStartDate(tripEvents),
  endDate: getEndDate(tripEvents),
}

render(aboutTripContainer, getTripInfoMarkup(tripInfo), `afterbegin`);
clearInnerHTML(menuContainer);
render(menuContainer, getMenuMarkup(), `afterbegin`);
render(menuContainer, getFiltersMarkup(), `beforeend`);
clearInnerHTML(tripEventsContainer);
render(tripEventsContainer, getSortMarkup(), `afterbegin`);
render(tripEventsContainer, getContentMarkup(tripEvents), `beforeend`);
