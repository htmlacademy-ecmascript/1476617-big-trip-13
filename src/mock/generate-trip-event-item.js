import dayjs from 'dayjs';

import {getRandomInteger, getRandomArrayItem} from '../utils';
import {TRIP_EVENT_TYPES, DESTINATIONS, DESCRIPTIONS, OFFER_TYPES} from './const';

const MIN_EVENT_START_AFTER_NOW = 24;
const MAX_EVENT_START_AFTER_NOW = 3600;
const MIN_EVENT_DURATION = 30;
const MAX_EVENT_DURATION = 720;
const EVENT_DURATION_STEP = 15;
const MIN_EVENT_PRICE = 10;
const MAX_EVENT_PRICE = 1000;
const MIN_DESCRIPTION_SENTENCE_AMOUNT = 1;
const MAX_DESCRIPTION_SENTENCE_AMOUNT = 5;
const MIN_OFFER_AMOUNT = 0;
const MAX_OFFERS_AMOUNT = 5;
const MIN_PHOTOS_AMOUNT = 1;
const MAX_PHOTOS_AMOUNT = 7;
const MIN_OFFER_PRICE = 10;
const MAX_OFFER_PRICE = 100;
const PRICE_STEP = 10;

const RANDOM_PHOTO_BASE_URL = `http://picsum.photos/248/152?r=`;
const RANDOM_PHOTO_MIN_INTEGER = 1;
const RANDOM_PHOTO_MAX_INTEGER = 1000000;

const getRandomPrice = (minPrice, maxPrice) => {
  return Math.round(getRandomInteger(minPrice, maxPrice) / PRICE_STEP) * PRICE_STEP;
};

const generateOffer = () => {
  const type = getRandomArrayItem(TRIP_EVENT_TYPES);
  const title = getRandomArrayItem(OFFER_TYPES);
  const price = getRandomPrice(MIN_OFFER_PRICE, MAX_OFFER_PRICE);

  return {
    type,
    title,
    price,
  };
};

const generateOffers = () => {
  const offersAmount = getRandomInteger(MIN_OFFER_AMOUNT, MAX_OFFERS_AMOUNT);
  return new Array(offersAmount).fill().map(generateOffer);
};

const generateDescription = () => {
  const sentenceAmount = getRandomInteger(MIN_DESCRIPTION_SENTENCE_AMOUNT, MAX_DESCRIPTION_SENTENCE_AMOUNT);
  return new Array(sentenceAmount).fill().map(() => getRandomArrayItem(DESCRIPTIONS)).join(` `);
};

const getRandomPhotos = () => {
  const photosAmout = getRandomInteger(MIN_PHOTOS_AMOUNT, MAX_PHOTOS_AMOUNT);
  return new Array(photosAmout).fill().map(() => `${RANDOM_PHOTO_BASE_URL}${getRandomInteger(RANDOM_PHOTO_MIN_INTEGER, RANDOM_PHOTO_MAX_INTEGER)}`);
};

const getRandomDuration = () => {
  return Math.round(getRandomInteger(MIN_EVENT_DURATION, MAX_EVENT_DURATION) / EVENT_DURATION_STEP) * EVENT_DURATION_STEP;
};

const getRandomDates = () => {
  const timeAfterNow = getRandomInteger(MIN_EVENT_START_AFTER_NOW, MAX_EVENT_START_AFTER_NOW);
  const eventDuration = getRandomDuration();

  const startDate = dayjs().add(timeAfterNow, `hours`);
  const endDate = startDate.add(eventDuration, `minute`);
  return {
    startDate,
    endDate,
  };
};

export const generateTripEventItem = () => {
  const type = getRandomArrayItem(TRIP_EVENT_TYPES);
  const destination = getRandomArrayItem(DESTINATIONS);
  const price = getRandomPrice(MIN_EVENT_PRICE, MAX_EVENT_PRICE);
  const description = generateDescription();
  const photos = getRandomPhotos();
  const {startDate, endDate} = getRandomDates();
  const offers = generateOffers();

  return {
    type,
    destination,
    price,
    description,
    photos,
    startDate,
    endDate,
    offers,
  };
};
