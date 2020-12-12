import {generateTripEventItem} from './mock/generate-trip-event-item';

import {getRandomInteger} from './utils';

import {getTripInfoMarkup} from './view/trip-info';
import {getMenuMarkup} from './view/menu';
import {getFiltersMarkup} from './view/filters';
import {getSortMarkup} from './view/sort';
import {getContentMarkup} from './view/content';

const MIN_EVENTS_AMOUNT = 15;
const MAX_EVENTS_AMOUNT = 20;

const generateTripEvents = () => {
  const eventsAmount = getRandomInteger(MIN_EVENTS_AMOUNT, MAX_EVENTS_AMOUNT);
  return new Array(eventsAmount).fill().map(generateTripEventItem);
};

const render = (container, HTMLMarkup, position) => {
  container.insertAdjacentHTML(position, HTMLMarkup);
};

const clearInnerHTML = (container) => {
  container.innerHTML = ``;
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * */

const aboutTripContainer = document.querySelector(`.trip-main`);
const menuContainer = aboutTripContainer.querySelector(`.trip-main__trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);

render(aboutTripContainer, getTripInfoMarkup(), `afterbegin`);
clearInnerHTML(menuContainer);
render(menuContainer, getMenuMarkup(), `afterbegin`);
render(menuContainer, getFiltersMarkup(), `beforeend`);
clearInnerHTML(tripEventsContainer);
render(tripEventsContainer, getSortMarkup(), `afterbegin`);
render(tripEventsContainer, getContentMarkup(), `beforeend`);
